import { Meta } from "@storybook/react";
import { Dashboard, DashboardProps } from "./dashboard";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "Sets data for dashboard table",
    },
  },
} as Meta;

export const PrimaryDashboard = (args: DashboardProps) => (
  <MemoryRouter>
    <Dashboard {...args} />
  </MemoryRouter>
);

PrimaryDashboard.args = {
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
