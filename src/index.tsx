import ReactDOM from 'react-dom/client';
import './index.css';
import Consultation4 from './consultation/consultation4/Consultation4';
import FormGender from './components/formGender/FormGender';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StarWarsGallery from './components/StarWardsGallery/StarWarsGallery';
import LoginForm from './components/loginForm/LoginForm';
import RobotForm from './components/robotForm/RobotForm';
import Feedback from './components/feedback/Feedback';
import Homepage from './components/HomePage/Homepage';
import Shop from './components/Shop/Shop';
import ProductPage from './components/productPage/ProductPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/login/Login';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<ProtectedRoute outlet={<StarWarsGallery/>}/>} />
        <Route path='/gender-form' element={<ProtectedRoute outlet={<FormGender/>}/>} />
        <Route path='/my-form' element={<ProtectedRoute outlet={<LoginForm/>}/>} />
        <Route path='/robot-form' element={<ProtectedRoute outlet={<RobotForm/>}/>} />
        <Route path='/feedback' element={<ProtectedRoute outlet={<Feedback/>}/>} />
        <Route path='/random-user' element={<ProtectedRoute outlet={<Consultation4/>}/>} />
        <Route path='/my-shop' element={<ProtectedRoute outlet={<Shop/>}/>} />
        <Route path='/my-shop/:id' element={<ProtectedRoute outlet={<ProductPage/>}/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='*' element={<h1>Error 404</h1>}/>

      </Route>
    </Routes>
  </HashRouter>
  </Provider>
);

