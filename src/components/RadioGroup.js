import React from "react";
import { InputWrapper } from "./InputWrapper";

export const RadioGroup = ({ data, belongsTo, setNamespace }) => {
  return (
    <div style={{ display: "flex" }}>
      {data.map((item) => (
        <InputWrapper
          relatesTo={item}
          value={item}
          type="radio"
          onChange={() => setNamespace(item)}
          labelContent={item.toUpperCase()}
          labelFirst={false}
          belongsTo={belongsTo}
        />
      ))}
    </div>
  );
};
