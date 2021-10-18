import { stringify } from "querystring";
import HttpMethods from "./HttpMehtods";
interface Options {
  [key: string]: string | number | string[];
}
interface HttpHeaders {
  [key: string]: string;
}
class ApiBuilder {
  private apiUrl: string | undefined;
  constructor() {
    this.apiUrl = process.env.API_URL;
  }
  private async Client(
    url: string,
    requestParams: RequestInit
  ): Promise<any> {
    return fetch(url, requestParams).then(async (response) => {
      if (response.status === 401) {
        return;
      }
      const data = await response;
      if (response.ok) {
        return await data.json();
      }
      return data;
    });
  }
  private NewHeaders(
    Accept: string,
    contentType?: string,
    AdditionalHeaders?: HttpHeaders
  ) {
    const headers: Headers = new Headers({
      Accept,
    });
    if (contentType) {
      headers.set("Content-Type", contentType);
    }
    if (AdditionalHeaders) {
      Object.keys(AdditionalHeaders).forEach((key) => {
        headers.set(key, AdditionalHeaders[key]);
      });
    }
    return headers;
  }
  private RequestBuilder(
    method: HttpMethods,
    options?: Options,
    body?: any,
    headers?: {
      [key: string]: string;
    }
  ): {
    queryString: string;
    requestParams: RequestInit;
  } {
    const contentType =
      method === HttpMethods.GET ? undefined : "application/json";
    const requestParams: RequestInit = {
      method,
      headers: this.NewHeaders("application/json", contentType, headers),
      credentials: "same-origin",
    };
    if (body) {
      requestParams.body = JSON.stringify(body);
    }
    const stringifiedOptions = stringify(options || {});
    const queryString =
      stringifiedOptions.length > 0 ? `?${stringifiedOptions}` : "";
    return { queryString, requestParams };
  }
  private UrlBuilder(endpoint: string, queryString: string = ""): string {
    let formattedUrl: string = `${endpoint}`;
    if (queryString) {
      formattedUrl += `?${queryString}`;
    }
    return formattedUrl;
  }
}

export default ApiBuilder;
