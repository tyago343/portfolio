import HttpMethods from "./HttpMehtods";
import ApiBuilder from "./RequestsBuilder";
export interface UserLogin {
  userName: string;
  password: string;
}
class UserApi extends ApiBuilder {
  public async login(data: UserLogin) {
    const endpoint: string = `${this.apiUrl}/users/login`;
    const requestParams = {
      method: HttpMethods.POST,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await super.Client(endpoint, requestParams);
    return result;
  }
}
export default UserApi;
