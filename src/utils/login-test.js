import { useNavigate } from "react-router";

export function TestLogin(props) {
  const navigate = useNavigate();
  if (props.username === "test" && props.password === "test") {
    console.log("Вход в систему");
    document.cookie = "user=" + props.username + "; max-age=1200";
    navigate("/map");
  } else {
    console.log("Введите верные данные");
  }
}
