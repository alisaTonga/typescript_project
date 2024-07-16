import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/layout/Layout';
import Lesson9 from './lessons/lesson9/Lesson9';
import Homework9 from './homework/Homework9/Homework9';
import Lesson10 from './lessons/lesson10/Lesson10';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <Lesson10 />
  </>
);

