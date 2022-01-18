import './Comment.scss';
import InputBar from '../../components/InputBar/InputBar';
import { useEffect, useState } from 'react';
import { Comment as CommentModel } from '../../utils/models/comment.model';
import CommentPost from '../../components/CommentPost/CommentPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkToken } from '../../utils/functions/checkToken.function';
import User from '../../utils/models/user.model';
import axios from 'axios';

const Comment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [comments, setComments] = useState<CommentModel[]>([]);

  const user = JSON.parse(localStorage.getItem('user') + '') as User;

  const handleCommentSubmit = async (comment: string) => {
    try {
      const toBeSentComment: { text: string; postId: number } = {
        text: comment,
        postId: parseInt(
          location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
        ),
      };
      const data = await axios.post(
        process.env.REACT_APP_API_URL + '/Comment',
        toBeSentComment
      );
      const sentComment = data.data as CommentModel;

      setComments([...comments, sentComment]);
    } catch (error) {}
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const getComments = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_URL + location.pathname
    );
    console.log(data);
    setComments(data.data as CommentModel[]);
  };

  useEffect(() => {
    checkToken().then((isLoggedIn) => {
      if (!isLoggedIn) navigate('/logIn');
    });
    getComments();
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
