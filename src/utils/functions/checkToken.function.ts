import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const checkToken: () => boolean = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  try {
    axios.get(process.env.REACT_APP_API_URL + '/User').then((res) => {
      if (res.status === 200) return true;
    });
  } catch (error) {
    if (error) return false;
  }
  return true;
};
