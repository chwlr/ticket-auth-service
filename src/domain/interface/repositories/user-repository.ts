import { UserRequestModel, UserResponseModel } from "../../models/user";

export interface UserRepository {
  createUser(user: UserRequestModel): Promise<UserResponseModel>;
  getUsers(): Promise<UserResponseModel[]>;
  getUser(email: string): Promise<UserResponseModel>;
}