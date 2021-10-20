import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import UserApi, { UserLogin } from "../utils/UserRequestsApi";
interface IUser {
  name: string,
  lastName: string,
  userName: string,
  password: string,
  tokenVersion: number,
}
interface IAuthContext {
  user: IUser,
  login: (form: UserLogin) => void,
  logout: () => void
}
const userService = new UserApi();
const AuthContext = createContext<IAuthContext | null>(null);
function AuthProvider(props: any) {
  const [user, setUser] = useState(null);
  const login = useCallback(
    (form: UserLogin, cb) => userService.login(form).then((user) => setUser(user)),
    [setUser]
  );
  const logout = useCallback(() => setUser(null), [setUser]);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
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
