import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import UserApi, { UserLogin } from "../utils/UserRequestsApi";
const userService = new UserApi();
const AuthContext = createContext(null);
function AuthProvider(props: any) {
  const [user, setUser] = useState(null);
  const login = useCallback(
    (form: UserLogin) => userService.login(form).then((user) => setUser(user)),
    [setUser]
  );
  const logout = useCallback(() => setUser(null), [setUser]);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <AuthContext.Provider value={value} {...props} />;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth cannot be used without an AuthProvider");
  }
  return context;
}
export { useAuth, AuthProvider };
