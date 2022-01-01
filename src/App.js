import React, { useState } from 'react';

function App() {
  const [values, setValues]  = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <div className="form-container">
      <form className="register-form">
        <input
        value={values.firstName}
        className="form-field"
        placeholder="First name"
        name="firstName"
        />
        <input
        value={values.lastName}
        className="form-field"
        placeholder="Last name"
        name="lastName"
        />
        <input
        value={values.email}
        className="form-field"
        placeholder="Email"
        name="email"
        />
        <button className="form=field">
          Register
        </button>

      </form>
    
    </div>
  );
}

export default App;
