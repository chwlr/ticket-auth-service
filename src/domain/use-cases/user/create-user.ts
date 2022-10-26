import { UserRequestModel } from "../../models/user";
import { UserRepository } from "../../interface/repositories/user-repository";
import { CreateUserUseCase } from "../../interface/use-cases/user-create-usecase";
import bcrypt from 'bcrypt'

export class CreateUser implements CreateUserUseCase {
  userRepository: UserRepository
  constructor(userRepository: UserRepository) {
      this.userRepository = userRepository
  }

  async execute(user: UserRequestModel) {
      const saltRounds = 8
       let obj = {
        email: user.email,
        password: await bcrypt.hash(user.password, saltRounds)
       }
      const result = await this.userRepository.createUser(obj)
      return result
  }
}