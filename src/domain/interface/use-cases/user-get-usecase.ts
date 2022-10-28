import { UserResponseModel } from "../../models/user";

export interface GetUserUseCase {
  execute(email: string): Promise<UserResponseModel>;
}