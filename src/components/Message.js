import React from "react";
import { useMessageContext } from "./MessageProvider";

export const Message = ({ code, englishContent, portugueseContent }) => {
  const { handleRemoveMessage } = useMessageContext();
  
  return (
    <div className="messageWrapper">
      <p>
        <strong>Code: </strong>
        {code}
      </p>
      <p>
        <strong>EN: </strong>
        {englishContent}
      </p>
      <p>
        <strong>PT: </strong>
        {portugueseContent}
      </p>
      <button onClick={() => handleRemoveMessage(code)}>Remove</button>
    </div>
  );
};
