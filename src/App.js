import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { data } from './data';

function App() {
  const [teamList, setTeamList] = useState(data);
  const [editCard, setEditCard] = useState();

  useEffect((props) => {
    setTeamList(data);
    
  }, [])

  const memberToEdit = () => {
    setEditCard(teamList)
  }
  
  return (
    <div className="homePage">
      <Navigation />
      <Route exact path='/' render={props => <TeamList {...props} teamList={teamList} memberToEdit={memberToEdit} /> } />
      <Route path='/form' render={props => <Form {...props} teamList={teamList} setTeamList={setTeamList} /> } />
    </div>
  );
}

export default App;