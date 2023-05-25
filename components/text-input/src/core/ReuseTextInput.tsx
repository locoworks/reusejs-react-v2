import React from "react";
import { default as HeadlessTextInput } from "./HeadlessTextInput";
import { HeadlessTextInputProps } from "./HeadlessTextInput";

export interface ReuseTextInputProps extends HeadlessTextInputProps {
  text?: string;
}

const ReuseTextInput: React.FC<ReuseTextInputProps> = (props) => {
  return (
    <HeadlessTextInput
      {...props}
      inputClassName="border rounded px-2 py-1 w-full"
    />
  );
};

export default ReuseTextInput;
