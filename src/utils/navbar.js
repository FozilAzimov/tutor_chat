import { Navigate } from 'react-router-dom';
import useUniqeId from '../hooks/useid';
import EnterCodePage from '../pages/EnterCode';
import LanguagePage from '../pages/Language';
import LoginAcountPage from '../pages/LoginAcount';
import RepairPasswordPage from '../pages/RepairPassword';


const navbar = [
  {
    id: useUniqeId,
    elements: <LanguagePage />,
    title: 'Language',
    path: '/language',
    private: false,
    hidden: false,
  },
  {
    id: useUniqeId,
    elements: <LoginAcountPage />,
    title: 'Login Acount',
    path: '/loginAcount',
    private: false,
  },
  {
    id: useUniqeId,
    elements: <EnterCodePage />,
    title: 'Enter Code',
    path: '/enterCode',
    private: false,
  },
  {
    id: useUniqeId,
    elements: <RepairPasswordPage />,
    title: 'Repair Password',
    path: '/repairPassword',
    private: false,
  },
];

export default navbar;