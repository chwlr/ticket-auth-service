import { UserDataSource } from "../../data/interface/data-sources/user-data-source";
import { UserRequestModel, UserResponseModel } from "../models/user";
import { UserRepository } from "../interface/repositories/user-repository";

export class UserRepositoryImpl implements UserRepository {
  userDataSource: UserDataSource
  constructor(userDataSource: UserDataSource) {
    this.userDataSource = userDataSource
  }

  async createUser(user: UserRequestModel): Promise<UserResponseModel> {
    const result = await this.userDataSource.create(user)
    return result
  }

  async getUsers(): Promise<UserResponseModel[]> {
    const result = await this.userDataSource.getUsers()
    return result
  }

  async getUser(email: string): Promise<UserResponseModel> {
    const result = await this.userDataSource.getUser(email)
    return result
  }
}