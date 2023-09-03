import { createContext, useContext, useState } from "react";

// User img
import user1 from '../../assets/icons/tg_use_icon.svg';
import user2 from '../../assets/icons/tg_use_icon2.svg';
import user3 from '../../assets/icons/tg_use_icon3.svg';
// Private Icon
import private_close from '../../assets/icons/private.svg';
import private_open from '../../assets/icons/private_open.svg';

const Telegramcontext = createContext();
export const TelegramContext = () => useContext(Telegramcontext);

const TelegramProvider = ({ children }) => {

  const [post, setPost] = useState([
    {
      id: 1,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 2,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 3,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 4,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 5,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 6,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 7,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 8,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 9,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 10,
      url: user1,
      name: 'Jane Cooper',
      time: '1m ago',
      description: 'IDK what else is there to do',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 11,
      url: user2,
      name: 'Wade Warren',
      time: '2h ago',
      description: 'What`s the progress on that ...',
      privateIcon: '',
      private1: private_close,
      private2: private_open,
    },
    {
      id: 12,
      url: user3,
      name: 'Leslie Alexander',
      time: '10.15',
      description: 'omg, this is amazing',
      privateIcon: ' ',
      private1: private_close,
      private2: private_open,
    },
  ], []);

  return <Telegramcontext.Provider value={[post, setPost]}>
    {children}
  </Telegramcontext.Provider>
}

export default TelegramProvider;










