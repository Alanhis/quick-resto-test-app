import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { CookieCheck } from "../../utils/cookie-check";
import "./authorization.css";
export function AuthorizationPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // РЕВЬЮ: нейминг может запутать, ты называешь константу location, а внутри хранится pathname
  const location = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    //  РЕВЬЮ: Функция должна делать то, как она называется.
    //  Ты сам пишешь, что это проверка на авторизованность, но при этом передаешь туда логику навигации.
    //  Мы либо проверяем, либо навигируем
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
            // РЕВЬЮ: инлайново формировать строку можно изящнее, через обратные кавычки `user=${username}; max-age=1200`
            document.cookie = "user=" + username + "; max-age=1200"; // Добавление данных авторизации с таймером в 20 минут
            navigate("/quick-resto-test-app/map"); // Перенаправление на страницу с картой
          } else {
            // РЕВЬЮ: а если человек не умеет открывать отладчик, сможет ли он понять, что что-то пошло не так?
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
        {/* РЕВЬЮ: для кнопки те же стили, что и для инпутов, те же отступы и текст съезжает вправо*/}
        <button className="login-input">Вход</button>
      </form>
    </section>
  );
}
