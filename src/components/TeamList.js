import React from 'react';

function TeamList({teamList, memberToEdit}) {

  return (
    <div>
      {teamList.map(member => (
        <div key={member.name} className='memberCard'>
         <h1>Team Member</h1>         
         <h2> {member.name} </h2>
         <h2> {member.email} </h2>
         <h2> {member.role} </h2>
         <h2> {member.location} </h2>
         <button className="editBtn" onClick={() => memberToEdit()}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default TeamList;