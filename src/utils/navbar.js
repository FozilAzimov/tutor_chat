// Unique ID 
import useUniqeID from "../hooks/useid";

// Navbar icons all
import home from '../assets/icons/home.svg';
import search from '../assets/icons/search.svg';
import application from '../assets/icons/application.svg';
import liked from '../assets/icons/liked.svg';
import acount from '../assets/icons/acount.svg';

// Navbar components
import Application from '../pages/Application';
import Acount from '../pages/Acount';
import Home from '../pages/Home';
import Liked from '../pages/Liked';
import Search from '../pages/Search';

const navbar = [
  { id: useUniqeID, path: '/home', element: <Home />, url: home, private: false, hidden: false, },
  { id: useUniqeID, path: '/search', element: <Search />, url: search, private: false, hidden: false, },
  { id: useUniqeID, path: '/application', element: <Application />, url: application, private: false, hidden: false, },
  { id: useUniqeID, path: '/liked', element: <Liked />, url: liked, private: false, hidden: false, },
  { id: useUniqeID, path: '/acount', element: <Acount />, url: acount, private: false, hidden: false, },
];

export default navbar;