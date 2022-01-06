import { useState } from 'react';
import './LogIn.scss';
const LogIn = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setButtonDisabled(
      !(emailRegex.test(e.target.value) && password.length > 0)
    );
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setButtonDisabled(!(emailRegex.test(email) && e.target.value.length > 0));
  };

  const handleSubmit = () => {
    if (buttonDisabled) return;
    //TODO Login
  };
  return (
    <div className="main-login">
      <div className="main-login__form">
        <h1>Jetzt bei Friendstagram Anmelden!</h1>
        <label htmlFor="login-email">Deine Email</label>
        <input
          type="email"
          id="login-email"
          value={email}
          onChange={(e) => onEmailChange(e)}
        />

        <label htmlFor="login-password">Dein Passwort</label>
        <input
          type="password"
          id="login-password"
          value={password}
          onChange={(e) => onPasswordChange(e)}
        />
        <button
          className="main-button"
          disabled={buttonDisabled}
          onClick={handleSubmit}
        >
          Jetzt anmelden!
        </button>
      </div>
    </div>
  );
};

export default LogIn;
