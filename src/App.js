import React, { useState } from 'react';
import './App.css';
import MemberForm from './MemberForm'
import Member from './Member'


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [member, setMember] = useState([{name:'Andrew', email: 'andrew@andrew.com', role:'Full Stack Web'}]);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = {...formValues, [inputName]: inputValue};
    setFormValues(updatedFormValues);
    console.log(inputName, inputValue);
  }
  const submitForm = () => {
    console.log(formValues);
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    console.log(newMember)
    setMember([...member, newMember]);
  }
  return (
    <div className="App">
      <h1>Create Your Team!</h1>
      <MemberForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        member.map(member => {
          return <Member key={member.id} details={member} />
        })
      } 
    </div>
  );
}

export default App;
