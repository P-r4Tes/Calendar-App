import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile } from "./UserProfile";

export default {
  component: UserProfile,
  title: "Components/UserProfile",
} as Meta<typeof UserProfile>;

type Story = StoryObj<typeof UserProfile>;
export const Primary: Story = {
  parameters: {
    backgrounds: {
      values: [
        { name: "violet", value: "#2C2F48" },
        { name: "black", value: "#000000" },
      ],
    },
  },
  args: {
    userName: "빈빈",
    userImage: "/defaultAvatar.png",
  },
};
