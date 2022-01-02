import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues]  = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handlefirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  return (
    <div className="form-container">
      <form className="register-form">
        <input
        onChange={handlefirstNameInputChange}
        value={values.firstName}
        className="form-field"
        placeholder="First name"
        name="firstName"
        /> <br />
        <input
        value={values.lastName}
        className="form-field"
        placeholder="Last name"
        name="lastName"
        /><br />
        <input
        value={values.email}
        className="form-field"
        placeholder="Email"
        name="email"
        /> <br />
        <button className="form-field" >
          Register
        </button>

      </form>
    
    </div>
  );
}

export default App;
