import './Styles.css';
import { useState } from 'react';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [initialAction, setInitialAction] = useState(false);

  let checkMark = false;
  let message = '';

  if (password === '') {
    checkMark = false;
    message = 'A password is required';
  } else if (password === '') {
    checkMark = false;
    message = 'A password is required';
  } else if (password.length < 8) {
    checkMark = false;
    message = 'Your password is too short';
  } else if (!/[0-9]/.test(password)) {
    checkMark = false;
    message = 'Your password needs to contain at least one number';
  } else if (!/[A-Z]/.test(password)) {
    checkMark = false;
    message = 'Your password needs to contain at least one capital letter';
  } else if (!/[!@#$%^&*()]/.test(password)) {
    checkMark = false;
    message =
      'Your password needs to contain at least one special character: !, @, #, $, %, ^, &, *, (, or )';
  } else {
    checkMark = true;
    message = ' ';
  }

  function handleChange(event) {
    setInitialAction(true);
    setPassword(event.target.value);
  }

  return (
    <div className="form-group">
      <label
        htmlFor="inputPassword5"
        className="form-label col-sm-12 ml-2"
        id="password-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control w-50"
        aria-labelledby="passwordHelpBlock"
        value={password}
        onChange={handleChange}
      />
      {initialAction &&
        (checkMark ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        ))}
      {initialAction && (
        <small id="passwordHelpBlock" className="form-text">
          {message}
        </small>
      )}
    </div>
  );
}
