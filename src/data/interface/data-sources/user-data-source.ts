import { UserRequestModel, UserResponseModel } from "../../../domain/models/user";

export interface UserDataSource {
  create(user: UserRequestModel): Promise<UserResponseModel>
  getUsers(): Promise<UserResponseModel[]>
  getUser(email: string): Promise<UserResponseModel>
}