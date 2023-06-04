import { Meta } from "@storybook/react";
import { Navbar, NavbarProps } from "./navbar";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    pages: {
      description: "Sets pages for navigation list",
    },
    logoTitle: {
      description: "Sets title for logo",
    },
  },
} as Meta;

export const PrimaryNavbar = (args: NavbarProps) => (
  <Router>
    <Navbar {...args} />
  </Router>
);

PrimaryNavbar.args = {
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
};
