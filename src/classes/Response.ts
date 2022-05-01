export class Response {
  private statusCode: number;

  private message: String;

  private result: any;

  constructor(statusCodes: number, message: String, result: any) {
    this.statusCode = statusCodes;
    this.message = message;
    this.result = result;
  }
}
