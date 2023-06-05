import { render, screen, cleanup } from "@testing-library/react";
import { Navbar, NavbarProps } from "./navbar";
import { describe } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Should test for Navbar Component", () => {
  const navbarProps: NavbarProps = {
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
    logoTitle: "Engage Solutions",
    testId: "primary-navbar",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar {...navbarProps} />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should load the navbar component", () => {
    const navbar = screen.getByTestId("primary-navbar");
    expect(navbar).toBeVisible();
  });

  it("should display two links", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
  });

  it("should display the logo title", () => {
    const navbar = screen.getByTestId("primary-navbar");
    expect(navbar).toHaveTextContent("Engage Solutions");
  });

  it("should activate the link upon clicking", async () => {
    const link = screen.getByRole("link", { name: /engage users/i });
    expect(link.classList.contains("active")).toBe(false);
    await userEvent.click(link);
    expect(link.classList.contains("active")).toBe(true);
  });
});
