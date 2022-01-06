import { useState } from 'react';
import './Upload.scss';
const Upload = () => {
  const [image, setImage] = useState(
    'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg'
  );

  const onUpload = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="main-upload">
      <h1>Lade jetzt dein Friendstagram-Moment hoch!</h1>

      <div className="main-upload__image-container">
        <label className="file_upload">
          Wähle deine Datei aus!
          <input type="file" accept="image/* " onChange={onUpload} />
        </label>

        <img src={image} alt="dummy image" />
      </div>
      <div className="main-upload__heading-container input_container">
        <label htmlFor="heading_input">Deine Überschrift</label>
        <input
          maxLength={100}
          type="text"
          id="heading_input"
          className="main-upload__heading-container__input "
        />
      </div>
      <div className="main-upload__description-container input_container">
        <label htmlFor="description_input">Deine Beschreibung</label>
        <textarea
          maxLength={200}
          id="description_input"
          className="main-upload__description-container__input"
        />
      </div>
      <button className="main-button">Jetzt Hochladen</button>
    </div>
  );
};

export default Upload;
