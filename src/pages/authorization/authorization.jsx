import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { CookieCheck } from "../../utils/cookie-check";
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
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Логин"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Пароль"
        />
        <button>Вход</button>
      </form>
    </section>
  );
}
