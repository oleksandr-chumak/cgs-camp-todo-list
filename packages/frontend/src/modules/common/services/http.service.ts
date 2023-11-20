import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';

export class HttpService {
  constructor(
    private readonly baseUrl: string = process.env.REACT_APP_SERVER_URL!,
    private readonly fetchingService: AxiosStatic = axios,
    private readonly apiVersion: string = 'api'
  ) {}

  private getFullApiUrl(url: string): string {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem('token')
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: AxiosRequestConfig): Omit<AxiosRequestConfig, 'data' | 'url'> {
    return configWithoutDataAndUrl;
  }

  get<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.put<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete<T>(config: AxiosRequestConfig, withAuth: boolean = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
