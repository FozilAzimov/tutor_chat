import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import Root from './root';
import RootContext from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RootContext>
      <Root />
    </RootContext>
  </>
);
