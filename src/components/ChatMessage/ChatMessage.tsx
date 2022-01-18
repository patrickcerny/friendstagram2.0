import './ChatMessage.scss';
import { ChatMessage as ChatMessageProps } from '../../utils/models/chatmessage.model';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../utils/models/user.model';

const ChatMessage = (props: ChatMessageProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    return () => {};
  }, []);

  const userRaw = JSON.parse(localStorage.getItem('user') + '');
  if (!userRaw) {
    localStorage.clear();
    navigate('/logIn');
  }
  const user = userRaw as User;

  return (
    <div
      className="chatmessage-main"
      style={
        user.email === props.sender.email
          ? {
              alignSelf: 'flex-end',
            }
          : {
              backgroundColor: '#8f8f8f',
              alignSelf: 'flex-start',
            }
      }
    >
      <div className="chatmessage-main__info">
        <img src={props.sender.profile_picture} alt={props.sender.username} />
        <span className="chatmessage-main__info__sender">
          {props.sender.username}
        </span>
        <span className="chatmessage-main__info__date">{props.created_at}</span>
      </div>

      <span className="chatmessage-main__content">{props.content}</span>
    </div>
  );
};

export default ChatMessage;
