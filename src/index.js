import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import LandingPage from './views/landingPage';
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './views/partials/footer'
ReactDOM.render(
  <React.StrictMode>
    <div className="background">
        <Router>
          <Home/>
          <Footer/>
        </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
