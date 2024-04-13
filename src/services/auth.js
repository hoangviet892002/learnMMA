class AuthService {
  static async Login(userName, password) {
    if (userName === "viet" && password === "viet") return userName;
    return null;
  }
}
export default AuthService;
