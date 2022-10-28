export interface NoSQLDatabaseWrapper {
  insertOne(doc: any): void
  find(query: object): Promise<any[]>
  findOne(email: string): Promise<any>
  // deleteOne(id: String): void
  // updateOne(id: String, data: object): void
}