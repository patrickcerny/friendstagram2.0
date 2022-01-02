import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ErrorGif from '../../assets/img/error.gif';
import ConfusedGif from '../../assets/img/confused.gif';
import './Error.scss';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const ErrorPage = () => {
  const navigate = useNavigate();
  const [errorPic, setErrorPic] = useState<any>(ErrorGif);
  const query = useQuery();
  const errorCode = query.get('code') ? query.get('code') : '404';
  const message =
    query.get('code') === '404'
      ? 'Deine Seite wurde nicht gefunden! Bitte überprüfe deine Internetverbindung oder lade das Fenster neu!'
      : 'Da ist was falsch gelaufen! Falls dieser Fehler häufiger auftritt, bitte melde dich bei uns oder versuche es später erneut!';
  useEffect(() => {
    if (errorCode === '404') setErrorPic(ConfusedGif);

    return () => {};
  }, [errorCode]);
  return (
    <div className="error_main">
      <img src={errorPic} alt="" />
      <h1>Fehler {errorCode} </h1>
      <p>{message}</p>
      <button className="main-button" onClick={() => navigate(-1)}>
        Bring mich zurück!
      </button>
    </div>
  );
};

export default ErrorPage;
