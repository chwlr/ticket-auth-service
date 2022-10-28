import { UserRequestModel, UserResponseModel } from "../../models/user";

export interface CreateUserUseCase {
  execute(user: UserRequestModel): Promise <UserResponseModel>;
}