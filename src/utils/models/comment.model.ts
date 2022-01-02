import User from './user.model';
export interface Comment {
  id_comment?: number;
  id_post?: number;
  id_user?: number;
  comment: string;
  created_at: string;
  user: User;
}
