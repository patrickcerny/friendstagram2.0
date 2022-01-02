import { Comment } from './comment.model';
import User from './user.model';

export interface Post {
  id_post: number;
  heading: string;
  description: string;
  created_at: string;
  image_small: string;
  image?: string;
  comments: Comment[];
  posted_by: User;
}
