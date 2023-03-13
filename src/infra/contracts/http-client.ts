export interface IHttpClient {
  request(data: any): Promise<any>;
}
