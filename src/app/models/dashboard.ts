import { Widget } from "./widget";
import { User } from "./user";
export interface Dashboard {
  id: string;
  name: string;
  user: User;
  widgets: Array<Widget>;
}
