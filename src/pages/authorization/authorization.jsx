import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { CookieCheck } from "../../utils/cookie-check";
import "./authorization.css";
export function AuthorizationPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    CookieCheck({ navigate, location });
  });
  return (
    <section>
      <form
        className="login-container"
        onSubmit={(e) => {
          e.preventDefault();

          if (username === "test" && password === "test") {
            console.log("Вход в систему");
            document.cookie = "user=" + username + "; max-age=1200";
            navigate("/map");
          } else {
            console.log("Введите верные данные");
          }
        }}
      >
        <input
          className="login-input"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Логин"
        />
        <input
          className="login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Пароль"
        />
        <button className="login-input">Вход</button>
      </form>
    </section>
  );
}
