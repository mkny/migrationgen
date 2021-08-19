import React from "react";
import { Input } from "./Input";
import { Label } from "./Label";

export const InputWrapper = ({
  relatesTo,
  type,
  value,
  onChange,
  labelContent,
  labelFirst = true,
  longerInput = false,
  belongsTo,
}) => {
  return (
    <div
      className={`${labelFirst ? "contentWrapper" : "contentWrapperReversed"} ${
        longerInput && "breakLine"
      }`}
    >
      <Label relatesTo={relatesTo}>{labelContent}</Label>
      <Input
        relatesTo={relatesTo}
        type={type}
        value={value}
        onChange={onChange}
        belongsTo={belongsTo}
        longerInput={longerInput}
      />
    </div>
  );
};
