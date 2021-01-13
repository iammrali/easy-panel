import http from "../httpService";

export const login = async (user) => {
  await http.post("", user);
};

export const logout = () => {
  http.clearToken();
};

export const getCurrentUser = () => {
  return { userName: "Ali", title: "Developer" };
};

const auth = {
  login,
  logout,
  getCurrentUser,
};

export default auth;
