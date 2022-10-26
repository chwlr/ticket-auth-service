import { UserResponseModel } from "../../models/user";
import { UserRepository } from "../../interface/repositories/user-repository";
import { GetUsersUseCase } from "../../interface/use-cases/users-get-usecase";

export class GetUsers implements GetUsersUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

 async execute(): Promise<UserResponseModel[]> {
   const result = await this.userRepository.getUsers()
   return result
 }
}