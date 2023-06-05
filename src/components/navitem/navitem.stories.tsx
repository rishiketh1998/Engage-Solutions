import { Meta } from "@storybook/react";
import { NavItem, NavItemProps } from "./navitem";
import { Stack } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
  argTypes: {
    activeColor: {
      description: "Sets custom text color for active state",
    },
    activevBorderBottom: {
      description: "Sets custom border color for active state",
    },
    height: {
      description: "Sets height of navigation link",
    },
    fontSize: {
      description: "Sets font size of navigation link",
    },
  },
} as Meta;

export const PrimaryNavItem = (args: NavItemProps) => (
  <Router>
    <Stack direction="row">
      <NavItem {...args} to="/Users">
        Users
      </NavItem>
    </Stack>
  </Router>
);

PrimaryNavItem.args = {
  color: "red",
  height: "80px",
  fontSize: "20px",
};

export const PrimaryNavItemCustomActiveColors = (args: NavItemProps) => (
  <Router>
    <Stack direction="row">
      <NavItem {...args} to="/users">
        Users
      </NavItem>
    </Stack>
  </Router>
);

PrimaryNavItemCustomActiveColors.args = {
  ...PrimaryNavItem.args,
  activecolor: "blue",
  activeborderbottom: "2px solid blue",
};
