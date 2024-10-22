class ApiError extends Error {
  public statusCode: number;
  public errors: any[];
  public data: any;
  public success: boolean;

  constructor(
    message = 'Something went wrong!',
    statusCode = 500,
    errors: any[] = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
