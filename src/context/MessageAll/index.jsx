import { createContext, useContext, useState } from "react";

const Messagescontext = createContext();
export const MessagesContext = () => useContext(Messagescontext);

const MessagesPovider = ({ children }) => {

  const [messages, setMessages] = useState([
    {
      id: 1,
      month: 'May',
      day: 7,
      time: '19:07',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
    {
      id: 2,
      month: 'May',
      day: 7,
      time: '19:10',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
    {
      id: 3,
      month: 'May',
      day: 7,
      time: '19:15',
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
  ]);

  return <Messagescontext.Provider value={[messages, setMessages]}>
    {children}
  </Messagescontext.Provider>
}

export default MessagesPovider;










