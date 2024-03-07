import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groups: [
      {
        name: "샘플",
        users: ["user1"],
        schedules: ["schedules"],
      },
    ],
  },
};
