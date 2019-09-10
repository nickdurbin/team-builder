import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { data } from './data';

function App() {
  const [teamList, setTeamList] = useState([data]);
  console.log(teamList);

  useEffect(() => {
    setTeamList(data);
  }, [])
  
  return (
    <div className="homePage">
      <Navigation />
      <Route exact path='/' render={props => <TeamList {...props} teamList={teamList} /> } />
      <Route path='/form' render={props => <Form {...props} teamList={teamList} /> } />
    </div>
  );
}

export default App;