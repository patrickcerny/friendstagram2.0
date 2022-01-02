import './ChatMessage.scss';
import { ChatMessage as ChatMessageProps } from '../../utils/models/chatmessage.model';
import { useEffect } from 'react';

const ChatMessage = (props: ChatMessageProps) => {
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    return () => {};
  }, []);
  return (
    <div className="chatmessage-main">
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
