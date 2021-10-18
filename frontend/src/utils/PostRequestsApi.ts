import HttpMethods from "./HttpMehtods";
import ApiBuilder from "./RequestsBuilder";

class PostApi extends ApiBuilder {
  public async getPosts() {
    const endpoint: string = super.UrlBuilder(`${this.apiUrl}/posts`);
    const { queryString, requestParams } = super.RequestBuilder(
      HttpMethods.GET
    );
    const result = await super.Client(
      `${endpoint}${queryString}`,
      requestParams
    );
    return result;
  }
  public async createPost(data: any) {
    const endpoint: string = super.UrlBuilder(`${this.apiUrl}/posts`);
    const { queryString, requestParams } = super.RequestBuilder(
      HttpMethods.POST,
      undefined,
      data
    );
    const result = await super.Client(
      `${endpoint}${queryString}`,
      requestParams
    );
    return result;
  }
}
export default PostApi;
