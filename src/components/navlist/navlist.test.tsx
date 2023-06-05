import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { NavList, NavListProps } from "./navlist";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("NavItem", () => {
  const navListProps: NavListProps = {
    pages: [
      {
        pageName: "Engage Users",
        pageRoute: "/users",
      },
      {
        pageName: "Engage Customers",
        pageRoute: "/customers",
      },
    ],
    direction: "row",
    spacing: 5,
    sx: {
      backgroundColor: "#143556",
    },
    linkStyle: {
      color: "#fff",
      height: "80px",
      fontSize: "16px",
      activecolor: "#fff",
      activeborderbottom: "2px solid #fff",
    },
    testid: "primary-navlist",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavList {...navListProps} />
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  it("should load the nav list component", () => {
    const navlist = screen.getByTestId("primary-navlist");
    expect(navlist).toBeVisible();
  });

  it("should activate the link upon clicking", async () => {
    const link = screen.getByText("Engage Users");
    expect(link.classList.contains("active")).toBe(false);
    await userEvent.click(link);
    expect(link.classList.contains("active")).toBe(true);
  });
});
