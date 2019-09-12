import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Form from './components/Form';
import TeamList from './components/TeamList';
import { data } from './data';

function App() {
  const [teamList, setTeamList] = useState(data);
  const [editMember, setEditMember] = useState();

  useEffect(() => {
    if(editMember) return setTeamList(editMember);
  }, [editMember])

  const memberToEdit = (id) => {
    teamList.filter((team) => team.id !== id)
  }

  const deleteMember = (id) => {
    const NewMembers = teamList.filter((team) => team.id !== id)
    setTeamList(NewMembers)
  }
  
  return (
    <div className="homePage">
      <Navigation />
      <Route exact path='/' render={props => <TeamList {...props} teamList={teamList} deleteMember={deleteMember} /> } />
      {/* <Route exact path='/:id' render={props => <TeamList {...props} teamList={teamList} memberToEdit={memberToEdit} /> } /> */}
      <Route path='/form' render={props => <Form {...props} teamList={teamList} setTeamList={setTeamList} /> } />
      <Route path='/form/:id' render={props => <Form {...props} teamList={teamList} setTeamList={setTeamList} memberToEdit={memberToEdit} /> } />
    </div>
  );
}

export default App;