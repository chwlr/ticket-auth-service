import { UserResponseModel } from "../../models/user";
import { UserRepository } from "../../interface/repositories/user-repository";
import { GetUserUseCase } from "../../interface/use-cases/user-get-usecase";

export class GetUser implements GetUserUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

 async execute(email: string): Promise<UserResponseModel> {
   const result = await this.userRepository.getUser(email)
   return result
 }
}