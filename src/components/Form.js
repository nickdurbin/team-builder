import React, { useState } from 'react';

function Form() {
  const [team, setTeam] = useState({
    name: '',
    email: '',
    role: '',
    location: '',
  })

  const handleChange = event => {
    setTeam({
      ...team,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  } 

  return (
    <div className="team-form">
      <form onSubmit={event => handleSubmit(event)}>
        <h1>Fill Out The Form</h1>
        <label>
          <input type="text" name="name" value={team.name} placeholder="Name..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="email" value={team.email} placeholder="Email..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="role" value={team.role} placeholder="Role..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="location" placeholder="Location..." value={team.location} onChange={event => handleChange(event)} />
        </label>
        <button className="formButton">Submit</button>
    </form>
    </div>
  )
}

export default Form;