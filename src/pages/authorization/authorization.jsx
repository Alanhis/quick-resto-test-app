import { useState } from "react";
import { TestLogin } from "../../utils/login-test";
export function AuthorizationPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          TestLogin({ username, password });
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
