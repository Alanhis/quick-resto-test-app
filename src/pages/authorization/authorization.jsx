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
    CookieCheck({ navigate, location }); // Проверка авторизован ли пользователь или нет
  });
  return (
    <section>
      <form
        className="login-container"
        onSubmit={(e) => {
          e.preventDefault();

          if (username === "test" && password === "test") {
            // Проверка на правильное данные логина и пароля
            console.log("Вход в систему");
            document.cookie = "user=" + username + "; max-age=1200"; // Добавление данных авторизации с таймером в 20 минут
            navigate("/map"); // Перенаправление на страницу с картой
          } else {
            console.log("Введите верные данные");
          }
        }}
      >
        <input
          className="login-input" // Поле с логином
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Логин"
        />
        <input
          className="login-input" // Поле с паролем
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
