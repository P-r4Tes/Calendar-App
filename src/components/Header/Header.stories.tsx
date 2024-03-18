import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import Header from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    inputText: "",
  },
  render: function Render(args) {
    const [{ inputText }, updateArgs] = useArgs();

    const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
      updateArgs({ inputText: e.target.value });
    };

    return <Header {...args} inputText={inputText} onChangeInputText={onChangeInputText} />;
  },
};
