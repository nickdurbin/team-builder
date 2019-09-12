import React from 'react';

function TeamList(props) {

  return (
    <div>
      {props.teamList.map((member, index) => (
        <div key={index} className='memberCard'>
         <h1>Team Member</h1>         
         <h2> {member.name} </h2>
         <h2> {member.email} </h2>
         <h2> {member.role} </h2>
         <h2> {member.location} </h2>
         <button className="deleteBtn" onClick={() => props.deleteMember(member.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TeamList;