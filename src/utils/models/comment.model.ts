import User from './user.model';
interface Comment {
  id_comment?: number;
  id_post?: number;
  id_user?: number;
  comment: string;
  created_at: string;
  user: User;
}

export default Comment;
