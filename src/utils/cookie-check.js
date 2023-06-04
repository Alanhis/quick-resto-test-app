import { useLocation, useNavigate } from "react-router";

export function CookieCheck(props) {
  if (
    props.location === "/quick-resto-test-app/map" &&
    document.cookie === ""
  ) {
    //Проверка на наличие данных о авторизации и перенеправление на страницу авторизации
    props.navigate("/quick-resto-test-app");
  } else if (
    props.location === "/quick-resto-test-app" &&
    document.cookie !== ""
  ) {
    // Проверка есть ли данные о пользователе и если есть, то оправка
    props.navigate("/quick-resto-test-app/map");
  }
}
