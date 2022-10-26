import { UserResponseModel } from "../../models/user";

export interface GetUsersUseCase {
  execute(): Promise<UserResponseModel[]>;
}