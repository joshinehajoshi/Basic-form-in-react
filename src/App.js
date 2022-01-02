import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues]  = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handlefirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }

  const handlelastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }



  return (
    <div className="form-container">
      <form className="register-form">
        {submitted ? <div className="success-messsge">Success! Thank you for registring</div> : null }
        <input
        onChange={handlefirstNameInputChange}
        value={values.firstName}
        className="form-field"
        placeholder="First name"
        name="firstName"
        /> <br />
        <input
        onChange={handlelastNameInputChange}
        value={values.lastName}
        className="form-field"
        placeholder="Last name"
        name="lastName"
        /><br />
        <input
        onChange={handleEmailInputChange }
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
