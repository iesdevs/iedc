"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginHandler = () => {
    if (username === "Admin" && password === "Admin") {
      router.push("/event");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          text="text"
          placeholder="Enter Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
