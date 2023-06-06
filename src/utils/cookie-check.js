// РЕВЬЮ: в лучших домах Парижа неиспользуемые импорты убирают
import { useLocation, useNavigate } from "react-router";

// РЕВЬЮ: нейминг функций всегда с маленькой буквы.
// Проверка работает таким образом, что в куке не должно быть ничего другого,
// однако, если ввести вручную в куки любое значение, то можно попасть на экран с картой
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
