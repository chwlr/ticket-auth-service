import { UserRequestModel } from "../../models/user";

export interface UserRepository {
  createUser(user: UserRequestModel): void;
}