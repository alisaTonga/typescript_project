import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson06 from './lessons/lesson6/Lesson06';
import Homework5 from './homework/homework05/homework5';
import Homework02 from './homework/Homework02';
import Homework04 from './homework/homework04/Homework04';
import Feedback from './components/feedback/Feedback';
import Card from './components/cards/card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <App />
    <Lesson06 /> */}
    <App />
    <Homework02 />
  </>
);

