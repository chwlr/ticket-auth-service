export class DatabaseConnectionError extends Error {
  reason = 'Error connection to database'

  constructor() {
    super()

    // extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }
}