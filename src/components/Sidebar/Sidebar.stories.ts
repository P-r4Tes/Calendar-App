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
        id: "test1",
        name: "샘플",
        users: ["user1"],
        schedules: ["schedules"],
      },
      {
        id: "test2",
        name: "샘플2",
        users: ["user2"],
        schedules: ["schedules"],
      },
      {
        id: "test3",
        name: "샘플3",
        users: ["user3"],
        schedules: ["schedules"],
      },
    ],
  },
};
