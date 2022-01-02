import './Comment.scss';
import InputBar from '../../components/InputBar/InputBar';
import { useState } from 'react';
import { Comment as CommentModel } from '../../utils/models/comment.model';
import CommentPost from '../../components/CommentPost/CommentPost';

const Comment = () => {
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
  ]);
  const user = {
    profile_picture: 'https://picsum.photos/200',
    email: 'patrick.cerny04@gmail.com',
    username: 'Patrick Cerny',
  };
  const handleCommentSubmit = (comment: string) => {
    setComments([...comments, { comment, created_at: '2020-01-01', user }]);
  };
  return (
    <div className="main-comment">
      {comments.map((comment) => (
        <CommentPost />
      ))}
      <InputBar onSend={handleCommentSubmit} user={user} />
    </div>
  );
};

export default Comment;
