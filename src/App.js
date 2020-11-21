import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom';
import Header from './components/Header';
import MainBody from './components/MainBody';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app">
      <Header/>
      <MainBody/>
    </div>
    </Router>
  )
}

export default App;