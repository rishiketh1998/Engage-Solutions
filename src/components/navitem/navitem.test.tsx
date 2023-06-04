import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavItem } from "./navitem";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("NavItem", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavItem to={"users"}>Engage Users</NavItem>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should load the nav item component", () => {
    const message = screen.getByText(/Engage Users/i);
    expect(message).toBeVisible();
  });

  it("should activate the link upon clicking", async () => {
    const link = screen.getByText("Engage Users");
    expect(link.classList.contains("active")).toBe(false);
    await userEvent.click(link);
    expect(link.classList.contains("active")).toBe(true);
  });
});
