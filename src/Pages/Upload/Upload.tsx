import { useEffect, useState } from 'react';
import './Upload.scss';
import ReactPlayer from 'react-player';
import { isImage, isVideo } from '../../utils/functions/isFileType.function';
import { checkToken } from '../../utils/functions/checkToken.function';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import User from '../../utils/models/user.model';
const Upload = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(
    'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg'
  );
  const [rawFile, setRawFile] = useState(null as any);

  const [fileIsImage, setFileIsImage] = useState(true);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const onUpload = (e: any) => {
    setRawFile(e.target.files[0]);

    if (isImage(e.target.files[0].name)) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileIsImage(true);
    } else if (isVideo(e.target.files[0].name)) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileIsImage(false);
    }
  };

  const onSubmit = async () => {
    if (!rawFile) return;
    try {
      const formdata = new FormData();
      formdata.append('heading', heading);
      formdata.append('description', description);
      formdata.append('postContent', rawFile);
      console.log(rawFile);
      const data = await axios.post(
        process.env.REACT_APP_API_URL + '/post/',
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
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          type="text"
          id="heading_input"
          className="main-upload__heading-container__input "
        />
      </div>
      <div className="main-upload__description-container input_container">
        <label htmlFor="description_input">Deine Beschreibung</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          id="description_input"
          className="main-upload__description-container__input"
        />
      </div>
      <button
        onClick={onSubmit}
        className="main-button"
        disabled={rawFile === null || heading === '' || description === ''}
      >
        Jetzt Hochladen
      </button>
    </div>
  );
};

export default Upload;
