import User from './user.model';

export interface ChatMessage {
  content: string;
  created_at: string;
  sender: User;
}
