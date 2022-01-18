import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../utils/functions/checkToken.function';
import User from '../../utils/models/user.model';
import './Settings.scss';
const Settings = () => {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState('');
  const [groupCode, setGroupCode] = useState('');
  const rawUSer = JSON.parse(localStorage.getItem('user') + '');
  const [rawFile, setRawFile] = useState(null as any);

  if (!rawUSer) {
    localStorage.clear();
    navigate('/logIn');
  }
  const user = rawUSer as User;

  const handleUsernameChange = async () => {
    try {
      const data = await axios.patch(
        process.env.REACT_APP_API_URL + '/User/changeUsername/' + user.username,
        {
          usernameNew: newUsername,
        }
      );
      console.log(data);

      navigate('/');
    } catch (error) {
      //localStorage.clear();
    }
  };

  const handleProfilePictureChange = async () => {
    const formdata = new FormData();
    formdata.append('image', rawFile);
    console.log(rawFile);
    try {
      const data = await axios.patch(
        process.env.REACT_APP_API_URL +
          '/User/changeProfilePicture/' +
          user.username,
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(data);

      navigate('/');
    } catch (error) {
      //localStorage.clear();
    }
  };

  const handleGroupCodeChange = async () => {
    try {
      const data = await axios.patch(
        process.env.REACT_APP_API_URL + '/group/code'
      );
      setGroupCode(data.data.code);

      navigate('/');
    } catch (error) {
      //localStorage.clear();
    }
  };

  const onUpload = (e: any) => {
    setRawFile(e.target.files[0]);
  };

  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (!isLoggedIn) navigate('/logIn');
    });
    const getGroupCode = async () => {
      try {
        const data = await axios.get(
          process.env.REACT_APP_API_URL + '/group/' + user.username
        );
        console.log(data);
        setGroupCode(data.data.code);
      } catch (error) {
        //localStorage.clear();
      }
    };
    getGroupCode();
    return () => {};
  }, []);
  return (
    <div className="main-settings">
      <h1>Einstellungen</h1>
      <div className="main-settings__invitation">
        <span className="main-settings__invitation__heading">
          Einladungslink
        </span>
        <span>http://localhost:3000/invite/{groupCode}</span>
        <button className="main-button" onClick={handleGroupCodeChange}>
          Neuen Code generieren
        </button>
      </div>
      <div className="main-settings__user  input_container ">
        <label htmlFor="username_input">Dein neuer Username</label>
        <input
          maxLength={100}
          type="text"
          id="username_input"
          className="main-settings__user__username-input"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button
          onClick={handleUsernameChange}
          className="main-settings__user__username-submit main-button"
        >
          Username speichern
        </button>

        <div className="main-settings__image-container">
          <label className=" main-settings__image-container__file_upload file_upload">
            Wähle deine Datei aus!
            <input
              type={'file'}
              accept="image/* "
              onChange={(e) => onUpload(e)}
            />
          </label>
        </div>
        <button
          onClick={handleProfilePictureChange}
          className="main-settings__user__file_upload-submit main-button"
        >
          Profilbild speichern
        </button>
      </div>
      <div className="main-settings__logout">
        <button
          className="main-button"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/logIn');
          }}
        >
          Ausloggen
        </button>
      </div>
    </div>
  );
};

export default Settings;
