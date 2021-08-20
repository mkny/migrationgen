import React, { useState } from "react";
import { Container } from "./Container";
import { InputWrapper } from "./InputWrapper";

export const MessageContentItem = ({ onConfirm }) => {
  const [messageContent, setMessageContent] = useState({
    code: "",
    pt: "",
    en: "",
  });

  function formatContentToPayload() {
    onConfirm({
      code: messageContent.code,
      content: [
        {
          locale: "en_us",
          text: messageContent.en,
        },
        {
          locale: "pt_br",
          text: messageContent.pt,
        },
      ],
    });
    return setMessageContent({
      code: "",
      pt: "",
      en: "",
    });
  }

  return (
    <Container>
      <InputWrapper
        relatesTo="code"
        labelContent="Message Code"
        onChange={(e) =>
          setMessageContent({ ...messageContent, code: e.currentTarget.value })
        }
        value={messageContent.code}
        longerInput
      />
      <InputWrapper
        relatesTo="portugueseContent"
        labelContent="Message (in Portuguese)"
        onChange={(e) =>
          setMessageContent({ ...messageContent, pt: e.currentTarget.value })
        }
        value={messageContent.pt}
        longerInput
      />
      <InputWrapper
        relatesTo="englishContent"
        labelContent="Message (in English)"
        onChange={(e) =>
          setMessageContent({ ...messageContent, en: e.currentTarget.value })
        }
        value={messageContent.en}
        longerInput
      />
      <button onClick={formatContentToPayload}>Confirm</button>
    </Container>
  );
};
