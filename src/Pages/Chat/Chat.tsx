import './Chat.scss';
import InputBar from '../../components/InputBar/InputBar';
import checkAuthenticated from '../../utils/functions/checkAuthenticated.function';
import { useRef, useState } from 'react';
import { ChatMessage as ChatMessageModel } from '../../utils/models/chatmessage.model';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

const user = {
  profile_picture: 'https://picsum.photos/200',
  email: 'patrick.cerny04@gmail.com',
  username: 'Patrick Cerny',
};

const Chat = () => {
  checkAuthenticated();
  const chatWindowRef = useRef<HTMLDivElement>(document.createElement('div'));
  const [messages, setMessages] = useState<ChatMessageModel[]>([
    {
      content:
        'Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick CernyHallo, ich bin Patrick Cerny Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick Cerny Hallo, ich bin Patrick CernyHallo, ich bin Patrick Cerny',
      created_at: '2020-01-01',
      sender: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'HundeSohn',
      },
    },
    {
      created_at: '2020-01-01',
      content:
        'Hallo, ich bin Patrick Cerny und bin ein Hund von Patrick Cerny',
      sender: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'Patrick Cerny',
      },
    },
    {
      created_at: '2020-01-01',
      content: 'Hallo, ich bin Patrick Cerny',
      sender: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'HundeSohn',
      },
    },
  ]);

  const onMessageSend = (message: string) => {
    const date = new Date();
    const today = date.toISOString().slice(0, 19).replace('T', ' ');
    setMessages([
      ...messages,
      {
        content: message,
        created_at: today,
        sender: user,
      },
    ]);
  };

  return (
    <div className="main-chat" ref={chatWindowRef}>
      {messages.map((message) => {
        return (
          <ChatMessage
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
