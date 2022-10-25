import { CustomeError } from "./custome-error"

export class DatabaseConnectionError extends CustomeError {
  statusCode = 500
  reason = 'Database connection error'

  constructor() {
    super()

    // extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors () {
    return [{ message: this.reason }]
  }

}