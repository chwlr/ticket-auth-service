import { UserRequestModel } from "../../../domain/models/user";
import { UserDataSource } from "../../interface/data-sources/user-data-source";
import { NoSQLDatabaseWrapper } from "../../interface/data-sources/nosql-database-wrapper";

export class MongoDBUserDataSource implements UserDataSource {
  private db: NoSQLDatabaseWrapper
  constructor(db: NoSQLDatabaseWrapper) {
    this.db = db
  }

  async create(user: UserRequestModel) {
    await this.db.insertOne(user)
}
}