import React from "react";
import { Message } from "./Message";

export const MessageDisplay = ({ messages }) => {
  return (
    <div>
      {messages.map((item) => (
        <Message
          code={item.code}
          englishContent={item.content[0].text}
          portugueseContent={item.content[1].text}
        />
      ))}
    </div>
  );
};
