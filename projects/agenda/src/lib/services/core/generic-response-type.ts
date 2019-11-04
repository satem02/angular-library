export interface GenericResponseType<T> {
    dataOutput: T;
    returnMessage: string;
    statusCode: string;
    success: boolean;
  }
  