import axios from 'axios';
import { useEffect, useState } from 'react';
import './SignUp.scss';

const SignUp = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [groupCode, setGroupCode] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setErrorMessage('');
    setButtonDisabled(true);

    //TODO add user posting
    axios.post('');
  };

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupCode(e.target.value.toUpperCase());
    setButtonDisabled(
      !(
        e.target.value.length === 6 &&
        username.length > 0 &&
        emailRegex.test(email) &&
        password.length > 0
      )
    );
  };
  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setButtonDisabled(
      !(
        groupCode.length === 16 &&
        e.target.value.length > 0 &&
        emailRegex.test(email) &&
        password.length > 0
      )
    );
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setButtonDisabled(
      !(
        groupCode.length === 16 &&
        username.length > 0 &&
        emailRegex.test(e.target.value) &&
        password.length > 0
      )
    );
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setButtonDisabled(
      !(
        groupCode.length === 16 &&
        username.length > 0 &&
        emailRegex.test(email) &&
        e.target.value.length > 0
      )
    );
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="main-signup">
      <div className="main-signup__form">
        <h1>Jetzt bei Friendstagram registrieren!</h1>
        <label htmlFor="group-code">Gruppencode</label>
        <input
          type="text"
          id="group-code"
          className="main-input"
          placeholder="Gruppencode eingeben"
          value={groupCode}
          onChange={(e) => onGroupChange(e)}
          maxLength={16}
        />
        <label htmlFor="username">Benutzername</label>
        <input
          type="text"
          id="username"
          className="main-input"
          placeholder="Username"
          value={username}
          onChange={(e) => onUsernameChange(e)}
        />
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          className="main-input"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => onEmailChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="main-input"
          placeholder="Friendstagram123"
          value={password}
          onChange={(e) => onPasswordChange(e)}
        />
        <button
          onClick={(e) => handleSubmit}
          disabled={buttonDisabled}
          className="main-button"
        >
          Jetzt Registrieren!
        </button>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default SignUp;
