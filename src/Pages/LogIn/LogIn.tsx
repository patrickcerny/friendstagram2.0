import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkToken } from '../../utils/functions/checkToken.function';
import './LogIn.scss';
const LogIn = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

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

  const handleSubmit = async () => {
    if (buttonDisabled) return;

    const data = {
      email,
      password,
    };

    //get token
    try {
      const authenticationUser = await axios.post(
        process.env.REACT_APP_API_URL + '/User/authenticate',
        data
      );
      const token = authenticationUser.data.token;
      localStorage.setItem('token', authenticationUser.data.token);
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      navigate('/');
    } catch (error: any) {
      if (error.response.status === 401) {
        return setErrorMessage('Invalid email or password');
      }
      return setErrorMessage(error);
    }
    window.location.reload();
  };

  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (isLoggedIn) navigate('/');
    });

    return () => {};
  }, [navigate]);
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
        <span>{errorMessage}</span>
        <button
          className="main-button"
          disabled={buttonDisabled}
          onClick={handleSubmit}
        >
          Jetzt anmelden!
        </button>
        <Link to={'/signup'}>Hast noch keinen Account?</Link>
      </div>
    </div>
  );
};

export default LogIn;
