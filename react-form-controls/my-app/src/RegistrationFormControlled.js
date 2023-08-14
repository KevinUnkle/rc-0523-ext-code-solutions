import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Controlled Form: {userName: ${userName}, password: ${password}}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="Submit">Sign Up</button>
    </form>
  );
}
