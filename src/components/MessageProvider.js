import React, { createContext, useContext, useState } from 'react'

const MessageContext = createContext({
  handleAddMessage: () => {},
  handleRemoveMessage: () => {},
  messages: []
})

const useMessageContext = () => useContext(MessageContext);

function MessageProvider({children}) {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = (msg) => {
    setMessages(m => m.concat(msg));
  }

  const handleRemoveMessage = (codeInput) => {
    setMessages(m => m.filter(({code}) => codeInput !== code))
  }

  return (
    <MessageContext.Provider value={{
      handleAddMessage,
      handleRemoveMessage,
      messages
    }}>
      {children}
    </MessageContext.Provider>
  )
}

const withMessageProvider = (WrappedComponent) => props => {
  return (
    <MessageProvider>
      <WrappedComponent {...props} />
    </MessageProvider>
  )
}

export default MessageProvider
export { useMessageContext, withMessageProvider }