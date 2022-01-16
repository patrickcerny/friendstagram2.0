import './Post.scss';
import { Post as PostProps } from '../../utils/models/post.model';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isImage, isVideo } from '../../utils/functions/isFileType.function';
import ReactPlayer from 'react-player';

const Post = (props: PostProps) => {
  const navigate = useNavigate();
  const handleOnCommentClick = () => navigate(`/comment/${props.id_post}`);
  //TODO: implement full imnage Loading

  const [file, setFile] = useState(
    'https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg'
  );
  const [fileIsImage, setFileIsImage] = useState(true);

  useEffect(() => {
    if (isImage(props.file)) {
      setFile(props.file);
      setFileIsImage(true);
    } else if (isVideo(props.file)) {
      setFile(props.file);
      setFileIsImage(false);
    }
    return () => {};
  }, []);
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
        {fileIsImage ? (
          <img alt={props.heading} src={file} />
        ) : (
          <ReactPlayer url={props.file} controls />
        )}
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
