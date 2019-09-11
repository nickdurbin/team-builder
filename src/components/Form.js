import React, { useState } from 'react';

function Form(props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    location: '',
  })

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeamList([...props.teamList, form])
    props.history.push('/')
    resetForm();
  } 

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      role: '',
      location: ''
    })
  }

  return (
    <div className="team-form">
      <form onSubmit={event => handleSubmit(event)}>
        <h1>Add Team Member</h1>
        <label>
          <input type="text" name="name" value={form.name} placeholder="Name..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="email" value={form.email} placeholder="Email..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="role" value={form.role} placeholder="Role..." onChange={event => handleChange(event)} />
        </label>
        <label>
          <input type="text" name="location" value={form.location} placeholder="Location..." onChange={event => handleChange(event)} />
        </label>
        <button className="formButton">Submit</button>
      </form>
    </div>
  )
}

export default Form;