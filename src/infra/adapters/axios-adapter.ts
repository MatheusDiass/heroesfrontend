import axios from 'axios';
import { IHttpClient } from '../contracts';
import { HttpRequestData } from '../types';

export class AxiosAdapter implements IHttpClient {
  async request(httpRequestData: HttpRequestData): Promise<any> {
    const { method, url, data } = httpRequestData;
    const reponse = await axios[method](url, data);
    return reponse;
  }
}
