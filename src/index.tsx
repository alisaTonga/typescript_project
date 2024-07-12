import ReactDOM from 'react-dom/client';
import './index.css';

import Homework5 from './homework/homework05/homework5';
import LoginForm from './components/loginForm/LoginForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <LoginForm />
  </>
);

