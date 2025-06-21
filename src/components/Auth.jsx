import { useState } from "react";
import { useFirebase } from "../hooks/useFirebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { register, login } = useFirebase();

  const handleRegister = async () => {
    await register(email, pass);
  };

  const handleLogin = async () => {
    await login(email, pass);
  };

  return (
    <div id="authSection">
      <div className="auth-horizontal">
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onTouchStart={(e) => e.target.focus()} // Add onTouchStart to trigger focus
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onTouchStart={(e) => e.target.focus()} // Add onTouchStart to trigger focus
        />

        <button
          id="registerBtn"
          className="register-btn"
          onClick={handleRegister}
          disabled={!email || !pass}
        >
          Register
        </button>

        <button
          id="loginBtn"
          className="login-btn"
          onClick={handleLogin}
          disabled={!email || !pass}
        >
          Go
        </button>
      </div>
    </div>
  );
}
