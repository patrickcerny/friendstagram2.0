import { useEffect, useState } from 'react';
import './Upload.scss';
import ReactPlayer from 'react-player';
import { isImage, isVideo } from '../../utils/functions/isFileType.function';
import { checkToken } from '../../utils/functions/checkToken.function';
import { useNavigate } from 'react-router-dom';
const Upload = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(
    'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg'
  );
  const [fileIsImage, setFileIsImage] = useState(true);

  const onUpload = (e: any) => {
    if (isImage(e.target.files[0].name)) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileIsImage(true);
    } else if (isVideo(e.target.files[0].name)) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileIsImage(false);
    }
  };

  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (!isLoggedIn) navigate('/logIn');
    });

    return () => {};
  }, []);
  return (
    <div className="main-upload">
      <h1>Lade jetzt dein Friendstagram-Moment hoch!</h1>

      <div className="main-upload__image-container">
        <label className="file_upload">
          Wähle deine Datei aus!
          <input type="file" accept="image/*, video/*" onChange={onUpload} />
        </label>
        {fileIsImage ? (
          <img src={file} alt="dummy image" />
        ) : (
          <ReactPlayer url={file} controls />
        )}
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
