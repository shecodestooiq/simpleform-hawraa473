
import React, { useState } from 'react';
import InputField from '../InputField/InputField'
import TextAreaField from '../TextAreaField/TextAreaField';

const HW = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted:' + { name, email, message })
    // console.log('Submitted:', { name, email, message });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> 
        <TextAreaField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        /> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HW;
