export type HttpRequestData = {
  method: 'post' | 'get' | 'put' | 'delete';
  url: string;
  data?: any;
};
