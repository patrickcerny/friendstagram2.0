import { Comment } from './comment.model';
import User from './user.model';

export interface Post {
  id_post: number;
  heading: string;
  description: string;
  created_at: string;
  file: string;
  comments: Comment[];
  posted_by: User;
}
