import React, { useState } from 'react';

function Form() {
  const [team, setTeam] = useState({
    name: '',
    email: '',
    role: '',
    location: '',
    bio: ''
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
    <div>
      
    </div>
  )
}

export default Form