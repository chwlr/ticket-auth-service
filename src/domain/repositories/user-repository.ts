import { UserDataSource } from "../../data/interface/data-sources/user-data-source";
import { UserRequestModel } from "../models/user";
import { UserRepository } from "../interface/repositories/user-repository";

export class UserRepositoryImpl implements UserRepository {
  userDataSource: UserDataSource
  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource
  }

  async createUser(user: UserRequestModel) {
    const result = await this.userDataSource.create(user)
    return result
  }
}