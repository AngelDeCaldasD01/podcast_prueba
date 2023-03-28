import axios, { AxiosRequestHeaders } from 'axios';

export type IApiCallOptions = {
  url: string;
  method?: 'GET' | 'DELETE' | 'POST' | 'PUT';
  data?: any;
  headers?: AxiosRequestHeaders;
};

export default async function apiCall(options: IApiCallOptions) {
  const response = await axios({ ...options });
  return response;
}
