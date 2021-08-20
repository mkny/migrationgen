import React from "react";

export const Message = ({ code, englishContent, portugueseContent }) => {
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
    </div>
  );
};
