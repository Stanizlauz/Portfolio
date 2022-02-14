import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from '../src/Branch/Navigation';
import Header from '../src/Branch/Header';
import AboutMe from './Branch/AboutMe';
import Services from './Branch/Services';
import Details from './Branch/Details';
import Testimonials from './Branch/Testimonials';
import FrequentQuestions from './Branch/FrequentQuestions';
import Contact from './Branch/Contact';
import Footer from './Branch/Footer';
import Copyright from './Branch/Copyright';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Header />
    <AboutMe />
    <Services />
    <Details />
    <Testimonials />
    <FrequentQuestions />
    <Contact />
    <Footer />
    <Copyright />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
