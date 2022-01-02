import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues]  = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlefirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handlelastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }


const handleSubmit = (event) => {
  event.preventDefault();
  if (values.firstName && values.lastName && values.email) {
    setValid(true);
  }
  setSubmitted(true)
}


  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Success! Thank you for registring</div> : null }
        <input
        onChange={handlefirstNameInputChange}
        value={values.firstName}
        className="form-field"
        placeholder="First name"
        name="firstName"
        /> <br />
         {submitted && !values.firstName ? <span className="span-field">Please enter First Name</span> : null}<br/>
        <input
        onChange={handlelastNameInputChange}
        value={values.lastName}
        className="form-field"
        placeholder="Last name"
        name="lastName"
        /><br />
       {submitted && !values.lastName ? <span  className="span-field">Please enter Last Name</span> : null} <br/>
        <input
        onChange={handleEmailInputChange }
        value={values.email}
        className="form-field"
        placeholder="Email"
        name="email"
        /> <br />
         {submitted && !values.email ?<span  className="span-field">Please enter Email Address</span> : null } <br/>
        <button className="form-field"  >
          Register
        </button>

      </form>
    
    </div>
  );
}

export default App;
