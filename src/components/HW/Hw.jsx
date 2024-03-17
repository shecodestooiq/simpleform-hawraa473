import { useState } from 'react';
import InputField from './components/inputField/InputField';
import TextAreaField from './components/textAreaField/TextAreaField';
useState

const Hw = () => { 
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return ( <form onSubmit={alert(name+email+message)}>
<InputField label='Name' type='text'  value={name} onChange={setName} required='required' />
<InputField  label='Email' type='email'  value={email} onChange={setEmail} required='required' />
<TextAreaField  label='Message'value={message} onChange={setMessage} required='required' />
<button type='submit'>Submit</button>
    </form>
 
      );
}
 
export default Hw;

