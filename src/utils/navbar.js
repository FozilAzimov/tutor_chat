// Unique ID 
import useUniqeID from "../hooks/useid";

// Navbar icons all
import home from '../assets/icons/home.svg';
import search from '../assets/icons/search.svg';
import application from '../assets/icons/application.svg';
import liked from '../assets/icons/liked.svg';
import acount from '../assets/icons/acount.svg';

// Navbar components hidden: false;
import ApplicationPage from '../pages/Application';
import AcountPage from '../pages/Acount';
import HomePage from '../pages/Home';
import LikedPage from '../pages/Liked';
import SearchPage from '../pages/Search';
// Hidden true
import LoginAcountPage from "../pages/LoginAcount";
import MessagesAllPage from "../pages/MessagesAll"
import TelegramPage from "../pages/Telegram";
import MessagePage from "../pages/Message";


const navbar = [
  {
    id: useUniqeID,
    path: '/home',
    element: <HomePage />,
    url: home,
    private: false,
    hidden: false,
  },
  {
    id: useUniqeID,
    path: '/search',
    element: <SearchPage />,
    url: search,
    private: false,
    hidden: false,
  },
  {
    id: useUniqeID,
    path: '/application',
    element: <ApplicationPage />,
    url: application,
    private: false,
    hidden: false,
  },
  {
    id: useUniqeID,
    path: '/liked',
    element: <LikedPage />,
    url: liked,
    private: false,
    hidden: false,
  },
  {
    id: useUniqeID,
    path: '/acount',
    element: <AcountPage />,
    url: acount,
    private: false,
    hidden: false,
  },
  {
    id: useUniqeID,
    path: '/loginacount',
    element: <LoginAcountPage />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqeID,
    path: '/messages',
    element: <MessagesAllPage />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqeID,
    path: '/telegram',
    element: <TelegramPage />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqeID,
    path: '/message',
    element: <MessagePage />,
    private: false,
    hidden: true,
  },
];

export default navbar;