import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import UserApi, { UserLogin } from "../utils/UserRequestsApi";
interface IUser {
  name: string;
  lastName: string;
  userName: string;
  password: string;
  tokenVersion: number;
}
interface IAuthContext {
  user: IUser;
  error: string;
  login: (form: UserLogin) => boolean;
  logout: () => void;
}
const userService = new UserApi();
const AuthContext = createContext<IAuthContext | null>(null);
function AuthProvider(props: any) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const login = useCallback(
    (form: UserLogin) =>
      userService.login(form).then((data) => {
        setError(null);
        if (data.user) {
          setUser(data.user);
          setAccessToken(data.accessToken);
        } else {
          setError(data.error);
        }
        return data.userName ? true : false;
      }),
    [setUser]
  );
  const logout = useCallback(() => setUser(null), [setUser]);
  const value = useMemo(
    () => ({ user, accessToken, login, logout, error }),
    [user, login, logout, error, accessToken]
  );
  return <AuthContext.Provider value={value} {...props} />;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error("useAuth cannot be used without an AuthProvider");
  }
  return context;
}
export { useAuth, AuthProvider };
