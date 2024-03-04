import React from "react";

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
export const ExampleButton = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ExampleButtonProps) => {

  return (
    <button type="button"  {...props}>
      {label}
      <h1 className="text-3xl font-bold underline"> {/*스토리북 실행 이후 해당 스타일이 적용되는 것을 확인 할 수 있습니다.*/}
      Hello world!
      </h1>
    </button>
  );
};
