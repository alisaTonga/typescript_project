import ReactDOM from 'react-dom/client';
import './index.css';

import StarWarsGallery from './components/StarWardsGallery/StarWarsGallery';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <StarWarsGallery />
  </>
);

