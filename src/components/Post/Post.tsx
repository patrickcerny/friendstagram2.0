import './Post.scss';
import { Post as PostProps } from '../../utils/models/post.model';
import { useNavigate } from 'react-router-dom';

const Post = (props: PostProps) => {
  const navigate = useNavigate();
  const handleOnCommentClick = () => navigate(`/comment/${props.id_post}`);
  //TODO: implement full imnage Loading
  const getPostImage = () => {};
  return (
    <div className="post-main">
      <div className="post-main__header">
        <img
          src={props.posted_by.profile_picture}
          alt={props.posted_by.username}
        />
        <span className="post-main__header__username">
          {props.posted_by.username}
        </span>
        <span className="post-main__header__date">{props.created_at}</span>
      </div>
      <div className="post-main__content">
        <img alt={props.heading} src={props.image_small} />
      </div>
      <div className="post-main__footer">
        <span className="post-main__footer__heading">{props.heading}</span>
        <span className="post-main__footer__description">
          {props.description}
        </span>
        <div
          className="post-main__footer__comment"
          onClick={handleOnCommentClick}
        >
          <span className="post-main__footer__comment__username">
            {props.comments[props.comments.length - 1].user.username}:
          </span>
          <span className="post-main__footer__comment__content">
            {props.comments[props.comments.length - 1].comment.length > 20
              ? props.comments[props.comments.length - 1].comment.substring(
                  0,
                  20
                ) + '...'
              : props.comments[props.comments.length - 1].comment}
          </span>
          <span className="post-main__footer__comment__date">
            {props.comments[props.comments.length - 1].created_at}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
