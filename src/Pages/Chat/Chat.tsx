import './Chat.scss';
import InputBar from '../../components/InputBar/InputBar';
import { useEffect, useRef, useState } from 'react';
import { ChatMessage as ChatMessageModel } from '../../utils/models/chatmessage.model';
import ChatMessage from '../../components/ChatMessage/ChatMessage';
import { checkToken } from '../../utils/functions/checkToken.function';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import User from '../../utils/models/user.model';

const Chat = () => {
  const navigate = useNavigate();

  const chatWindowRef = useRef<HTMLDivElement>(document.createElement('div'));
  const [messages, setMessages] = useState<ChatMessageModel[]>([]);

  const rawUSer = JSON.parse(localStorage.getItem('user') + '');
  if (!rawUSer) {
    localStorage.clear();
    navigate('/logIn');
  }
  const user = rawUSer as User;

  const onMessageSend = async (message: string) => {
    const newMessage = {
      content: message,
    };
    try {
      const data = await axios.post(
        process.env.REACT_APP_API_URL + '/Chat/',
        newMessage
      );
      const gottenMessage = data.data as ChatMessageModel;
      console.log(gottenMessage);
      setMessages([...messages, gottenMessage]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (!isLoggedIn) navigate('/logIn');
    });

    const getMessages = async () => {
      const data = await axios.get(process.env.REACT_APP_API_URL + '/Chat/');
      const newMessages = data.data as ChatMessageModel[];
      setMessages([...messages, ...newMessages]);
    };
    getMessages();
    return () => {};
  }, []);
  return (
    <div className="main-chat" ref={chatWindowRef}>
      {messages.map((message, key) => {
        return (
          <ChatMessage
            key={key}
            created_at={message.created_at}
            content={message.content}
            sender={message.sender}
          />
        );
      })}
      <InputBar onSend={onMessageSend} user={user} />
    </div>
  );
};

export default Chat;
