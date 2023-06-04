import { useLocation, useNavigate } from "react-router";

export function CookieCheck(props) {
  if (props.location === "/map" && document.cookie === "") {
    //Проверка на наличие данных о авторизации и перенеправление на страницу авторизации
    props.navigate("/");
  } else if (props.location === "/" && document.cookie !== "") {
    // Проверка есть ли данные о пользователе и если есть, то оправка
    props.navigate("/map");
  }
}
