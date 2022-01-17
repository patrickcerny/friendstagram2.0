import './Comment.scss';
import InputBar from '../../components/InputBar/InputBar';
import { useEffect, useState } from 'react';
import { Comment as CommentModel } from '../../utils/models/comment.model';
import CommentPost from '../../components/CommentPost/CommentPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../../utils/functions/checkToken.function';

const Comment = () => {
  const navigate = useNavigate();

  const [comments, setComments] = useState<CommentModel[]>([
    {
      comment: 'This is a comment',
      created_at: '2020-01-01',
      user: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'Patrick Cerny',
      },
    },
    {
      comment: 'This is a comment',
      created_at: '2020-01-01',
      user: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'Patrick Cerny',
      },
    },
    {
      comment: 'This is a comment',
      created_at: '2020-01-01',
      user: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'Patrick Cerny',
      },
    },
    {
      comment: 'This is a comment',
      created_at: '2020-01-01',
      user: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'Patrick Cerny',
      },
    },
    {
      comment: 'This is a comment',
      created_at: '2020-01-01',
      user: {
        profile_picture: 'https://picsum.photos/200',
        email: 'patrick.cerny04@gmail.com',
        username: 'Patrick Cerny',
      },
    },
  ]);
  const user = {
    profile_picture: 'https://picsum.photos/200',
    email: 'patrick.cerny04@gmail.com',
    username: 'Patrick Cerny',
  };
  const handleCommentSubmit = (comment: string) => {
    setComments([...comments, { comment, created_at: '2020-01-01', user }]);
  };
  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (!isLoggedIn) navigate('/logIn');
    });

    return () => {};
  }, []);
  return (
    <div className="main-comment">
      <div className="main-comment__fab" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      {comments.map((comment, index) => (
        <CommentPost
          key={index}
          comment={comment.comment}
          created_at={comment.created_at}
          user={comment.user}
        />
      ))}
      <InputBar onSend={handleCommentSubmit} user={user} />
    </div>
  );
};

export default Comment;
