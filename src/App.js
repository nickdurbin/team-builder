import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div>
      <Route exact path='/' render={props => <Form {...props} /> } />
    </div>
  );
}

export default App;