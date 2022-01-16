import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const groupCodeInput = useRef(null as any);

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [groupCode, setGroupCode] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async () => {
    setErrorMessage('');
    setButtonDisabled(true);

    const data = {
      groupCode,
      username,
      email,
      password,
    };

    //register user
    try {
      const returnedUser = await axios.post(
        process.env.REACT_APP_API_URL + '/User',
        data
      );
      console.log(returnedUser);
    } catch (error) {
      console.log(error);
      return setErrorMessage(error + '');
    }

    //get token
    try {
      const authenticationUser = await axios.post(
        process.env.REACT_APP_API_URL + '/User/authenticate',
        data
      );
      const token = authenticationUser.data.token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    } catch (error) {
      console.log(error);
      return setErrorMessage(error + '');
    }

    window.location.reload();
  };

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
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
    if (searchParams.get('groupCode')) {
      const groupCode = searchParams.get('groupCode') + '';
      if (groupCode.length < 16) return;
      if (groupCode.length > 16)
        return setGroupCode(groupCode.substring(0, 16));
      setGroupCode(groupCode);
    }
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
          placeholder="0123456789ABCDEF"
          value={groupCode}
          onChange={(e) => onGroupChange(e)}
          maxLength={16}
          ref={groupCodeInput}
        />
        <label htmlFor="username">Benutzername</label>
        <input
          type="text"
          id="username"
          className="main-input"
          placeholder="max-mustermann"
          value={username}
          onChange={(e) => onUsernameChange(e)}
        />
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          className="main-input"
          placeholder="max@mustermann.com"
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
          onClick={handleSubmit}
          disabled={buttonDisabled}
          className="main-button"
        >
          Jetzt Registrieren!
        </button>
        <Link to={'/login'}>Hast schon einen Account?</Link>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default SignUp;
