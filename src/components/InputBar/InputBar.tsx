import { useState } from 'react';
import User from '../../utils/models/user.model';
import './InputBar.scss';
interface InputBarProps {
  onSend: (message: string) => void;
  user: User;
}

const InputBar = (props: InputBarProps) => {
  const [message, setMessage] = useState('');

  const handleOnSend = () => {
    props.onSend(message);
    setMessage('');
  };
  return (
    <div className="main-inputbar">
      <img src={props.user.profile_picture} alt={props.user.username} />
      <textarea
        maxLength={200}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleOnSend}>Senden</button>
    </div>
  );
};

export default InputBar;
