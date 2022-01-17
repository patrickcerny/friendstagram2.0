import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const checkToken: () => Promise<boolean> = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + '/User/authorized'
    );
    localStorage.setItem('user', JSON.stringify(res.data));
  } catch (error) {
    return false;
  }
  return true;
};
