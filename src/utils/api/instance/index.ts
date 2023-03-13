import type { AxiosInstance } from 'axios';
import axios from 'axios';

interface ApiConstructorParams {
  baseUrl: string;
}

export class API {
  public baseUrl: string;

  public request: AxiosInstance;

  constructor(options: ApiConstructorParams) {
    this.baseUrl = options.baseUrl;

    this.request = axios.create({
      baseURL: options.baseUrl,
      headers: {
        authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    });
  }
}

export const strapiApi = new API({ baseUrl: 'http://localhost:1337/api' });
