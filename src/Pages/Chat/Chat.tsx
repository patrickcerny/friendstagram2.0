import InputBar from '../../components/InputBar/InputBar';
import checkAuthenticated from '../../utils/functions/checkAuthenticated.function';

const user = {
  profile_picture: 'https://picsum.photos/200',
  email: 'patrick.cerny04@gmail.com',
  username: 'Patrick Cerny',
};

const Chat = () => {
  checkAuthenticated();

  const onMessageSend = (message: string) => {
    console.log(message);
  };
  return (
    <div>
      <InputBar onSend={onMessageSend} user={user} />
    </div>
  );
};

export default Chat;
