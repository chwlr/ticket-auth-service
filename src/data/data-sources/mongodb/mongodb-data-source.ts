import { UserRequestModel, UserResponseModel } from "../../../domain/models/user";
import { UserDataSource } from "../../interface/data-sources/user-data-source";
import { NoSQLDatabaseWrapper } from "../../interface/data-sources/nosql-database-wrapper";

export class MongoDBUserDataSource implements UserDataSource {
  private db: NoSQLDatabaseWrapper
  constructor(db: NoSQLDatabaseWrapper) {
    this.db = db
  }

  async create(user: UserRequestModel): Promise<UserResponseModel> {
    const data = await this.db.insertOne(user)
    const result = {
      _id: data.insertedId.toString(),
      email: user.email
    }
    return result
  }
  async getUsers(): Promise<UserResponseModel[]> {
    const result = await this.db.find({})
    return result.map(item => ({
        _id: item._id,
        email: item.email.toString()
    }));
  }
  async getUser(email: string): Promise<UserResponseModel> {
    const result = await this.db.findOne(email)
    return result
  }
}