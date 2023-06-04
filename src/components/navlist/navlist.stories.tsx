import { Meta } from "@storybook/react";
import { NavList, NavListProps } from "./navlist";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/NavList",
  component: NavList,
  tags: ["autodocs"],
  argTypes: {
    pages: {
      description: "Sets pages for navigation list",
    },
    linkStyle: {
      description: "Sets props for NavItem component",
    },
  },
} as Meta;

export const PrimaryNavList = (args: NavListProps) => (
  <MemoryRouter>
    <NavList {...args} />
  </MemoryRouter>
);

PrimaryNavList.args = {
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
    activeColor: "#fff",
    activeBorderBottom: "2px solid #fff",
  },
  testid: "primary-navlist",
};
