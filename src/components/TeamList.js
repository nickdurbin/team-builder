import React from 'react';

function TeamList({teamList}) {

  return (
    <div>
      {teamList.map(member => (
        <div key={member.name} className='memberCard'>
         <h1>Team Member</h1>         
         <h2> {member.name} </h2>
         <h2> {member.email} </h2>
         <h2> {member.role} </h2>
         <h2> {member.location} </h2>
        </div>
      ))}
    </div>
  )
}

export default TeamList;