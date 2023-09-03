import { createContext, useContext, useState } from "react";

const Messagescontext = createContext();
export const MessagesContext = () => useContext(Messagescontext);

const MessagesProvider = ({ children }) => {

  const realDate = new Date();
  const month = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];
  const [messages, setMessages] = useState([
    {
      id: 1,
      month: month[`${realDate.getMonth()}`],
      day: `${realDate.getDate()}`,
      time: `${realDate.getHours() >= 10 ? realDate.getHours() : `0${realDate.getHours()}`}:${realDate.getMinutes() >= 10 ? realDate.getMinutes() : `0${realDate.getMinutes()}`}`,
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
    {
      id: 2,
      month: month[`${realDate.getMonth()}`],
      day: `${realDate.getDate()}`,
      time: `${realDate.getHours() >= 10 ? realDate.getHours() : `0${realDate.getHours()}`}:${realDate.getMinutes() >= 10 ? realDate.getMinutes() : `0${realDate.getMinutes()}`}`,
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
    {
      id: 3,
      month: month[`${realDate.getMonth()}`],
      day: `${realDate.getDate()}`,
      time: `${realDate.getHours() >= 10 ? realDate.getHours() : `0${realDate.getHours()}`}:${realDate.getMinutes() >= 10 ? realDate.getMinutes() : `0${realDate.getMinutes()}`}`,
      title: 'My name is Catherine. I like dancing',
      description: 'Lorem Ipsum is simply dummy text of the....',
    },
  ]);

  return <Messagescontext.Provider value={[messages, setMessages]}>
    {children}
  </Messagescontext.Provider>
}

export default MessagesProvider;










