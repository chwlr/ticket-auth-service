import { UserRequestModel } from "../../models/user";

export interface CreateUserUseCase {
  execute(user: UserRequestModel): void;
}