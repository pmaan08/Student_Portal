import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function Main() {
  return <h1>Main Route</h1>;
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
    </Router>
  );
}

export default App;
