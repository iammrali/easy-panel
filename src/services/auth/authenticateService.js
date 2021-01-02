import http from "../httpService";

export const login = async (user) => {
  await http.post("", user);
};

export const logout = () => {
  http.clearToken();
};

export const getCurrentUser = () => {
  return { username: "ali", title: "developer" };
};

const auth = {
  login,
  logout,
  getCurrentUser,
};

export default auth;
