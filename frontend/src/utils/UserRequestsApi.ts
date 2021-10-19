import HttpMethods from "./HttpMehtods";
import ApiBuilder from "./RequestsBuilder";
export interface UserLogin {
  userName: string;
  password: string;
}
class UserApi extends ApiBuilder {
  public async login(data: UserLogin) {
    const endpoint: string = `${this.apiUrl}/users/login`;
    const requestParams = { method: HttpMethods.POST, body: data };
    const result = await super.Client(endpoint, requestParams);
    return result;
  }
}
export default UserApi;
