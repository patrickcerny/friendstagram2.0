import './Settings.scss';
const Settings = () => {
  return (
    <div className="main-settings">
      <h1>Einstellungen</h1>
      <div className="main-settings__invitation">
        <span className="main-settings__invitation__heading">
          Einladungslink
        </span>
        <span>http://localhost:3000/invite/EEEEEE</span>
        <button className="main-button">Neuen Code generieren</button>
      </div>
      <div className="main-settings__user  input_container ">
        <label htmlFor="username_input">Dein neuer Username</label>
        <input
          maxLength={100}
          type="text"
          id="username_input"
          className="main-settings__user__username-input"
        />
        <button className="main-settings__user__username-submit main-button">
          Username speichern
        </button>

        <div className="main-upload__image-container">
          <label className=" main-upload__image-container__file_upload file_upload">
            Wähle deine Datei aus!
          </label>
        </div>
        <button className="main-settings__user__file_upload-submit main-button">
          Profilbild speichern
        </button>
      </div>
      <div className="main-settings__logout">
        <button className="main-button">Ausloggen</button>
      </div>
    </div>
  );
};

export default Settings;
