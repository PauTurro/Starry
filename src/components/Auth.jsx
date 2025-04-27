import { useState } from "react";

export default function Auth({ onLogin, onRegister, error, setError }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = async () => {
    if (!email || !pass) {
      setError("Please enter both email and password.");
      return;
    }
    setError(null);
    await onRegister(email, pass);
  };

  const handleLogin = async () => {
    if (!email || !pass) {
      setError("Please enter both email and password.");
      return;
    }
    setError(null);
    await onLogin(email, pass);
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
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
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
