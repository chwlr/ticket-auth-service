import { UserRequestModel } from "../../../domain/models/user";

export interface UserDataSource {
  create(user: UserRequestModel):void
}