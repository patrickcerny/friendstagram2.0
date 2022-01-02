import { useState } from 'react';
import User from '../../utils/models/user.model';
import './InputBar.scss';

interface InputBarProps {
  onSend: (message: string) => void;
  user: User;
}

const InputBar = (props: InputBarProps) => {
  const [message, setMessage] = useState('');

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) return handleOnSend();
  };

  const handleOnSend = () => {
    if (message.trim().length <= 0) return;

    props.onSend(message.trim());
    setMessage('');
  };
  return (
    <div className="main-inputbar">
      <img src={props.user.profile_picture} alt={props.user.username} />
      <textarea
        maxLength={1000}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={handleOnSend} className="main-button">
        Senden
      </button>
    </div>
  );
};

export default InputBar;
