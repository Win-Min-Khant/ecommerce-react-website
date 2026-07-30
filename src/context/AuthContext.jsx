import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      return {
        success: false,
        message: "User already exists with this email. ",
      };
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setUser({ email });
      return { success: true, message: "Account Created Successfully. " };
    }
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existsUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!existsUser) {
      return { success: false, message: "Invalid email or password." };
    }
    localStorage.setItem("currentUserEmail", email);
    setUser({ email });
    return { success: true, message: "Logged in successfully." };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
