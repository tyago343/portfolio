import HttpMethods from "./HttpMehtods";
import ApiBuilder from "./RequestsBuilder";

class PostApi extends ApiBuilder {
  public async getPosts() {
    const endpoint: string = `${this.apiUrl}/posts`;
    const requestParams = HttpMethods.GET;

    const result = await super.Client(`${endpoint}`, requestParams);
    return result;
  }
  public async createPost(data: any) {
    const endpoint: string = `${this.apiUrl}/posts`;
    const requestParams = { method: HttpMethods.POST, body: data };
    const result = await super.Client(`${endpoint}`, requestParams);
    return result;
  }
}
export default PostApi;
