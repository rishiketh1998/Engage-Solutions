import { render, screen, cleanup } from "@testing-library/react";
import { Dashboard, DashboardProps } from "./dashboard";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Should test for Dashboard Component", () => {
  const dashboardProps: DashboardProps = {
    data: [
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
        reference: "123456",
      },
      {
        id: 2,
        first_name: "Jane",
        last_name: "Doe",
        username: "janedoe",
        reference: "123456",
      },
    ],
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Dashboard {...dashboardProps} />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should load the dashboard component", () => {
    const dashboard = screen.getByTestId("dashboard");
    expect(dashboard).toBeVisible();
  });

  it("should display 3 rows", () => {
    screen.logTestingPlaygroundURL();
    const dashboard = screen.getAllByRole("row");
    expect(dashboard.length).toBe(3);
  });

  it('should click on the "More Info" button', async () => {
    screen.logTestingPlaygroundURL();
    const button = screen.getAllByTestId("ArrowCircleRightOutlinedIcon");
    const [firstButton, secondButton] = button;
    expect(firstButton).toBeVisible();
    expect(secondButton).toBeVisible();
  });
});
