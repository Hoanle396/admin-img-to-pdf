import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Feedback from './pages/Feedback';
import Navbar from './components/Navbar';
import User from './pages/User';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
     <BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="user" element={<User />} />
    </Routes>
  </BrowserRouter>
  </NextUIProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
