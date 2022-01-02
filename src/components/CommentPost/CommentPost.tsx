import './CommentPost.scss';
import { Comment as CommentProps } from '../../utils/models/comment.model';
import { useEffect } from 'react';

const CommentPost = (props: CommentProps) => {
  useEffect(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    return () => {};
  }, []);

  return (
    <div className="main-commentpost">
      <div className="main-commentpost__info">
        <img
          className="main-commentpost__info__image"
          src={props.user.profile_picture}
          alt={props.user.username}
        />
        <span className="main-commentpost__info__username">
          {props.user.username}
        </span>
        <span className="main-commentpost__info__date">{props.created_at}</span>
        <span className="main-commentpost__info__sender"></span>
      </div>
      <span className="main-commentpost__content">{props.comment}</span>
    </div>
  );
};

export default CommentPost;
