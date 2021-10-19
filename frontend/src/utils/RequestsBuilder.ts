class ApiBuilder {
  public apiUrl: string | undefined;
  constructor() {
    this.apiUrl = process.env.REACT_APP_API_URL;
  }
  public async Client(
    url: string,
    requestParams: any
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
}

export default ApiBuilder;
