import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Form from './components/Form';

function App() {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    console.log(setTeamList(), 'Setting the state to the current list.')
    setTeamList()
  }, [])
  
  return (
    <div className="homePage">
      <Navigation />
      <Route exact path='/' />
      <Route path='/form' render={props => <Form {...props} teamList={teamList} /> } />
    </div>
  );
}

export default App;