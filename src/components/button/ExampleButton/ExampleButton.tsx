import React from "react";
import "./ExampleButton.module.css";

interface ExampleButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ExampleButton = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button type="button" className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} {...props}>
      {label}
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
