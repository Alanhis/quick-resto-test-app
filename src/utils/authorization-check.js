// РЕВЬЮ: в лучших домах Парижа неиспользуемые импорты убирают

// РЕВЬЮ: нейминг функций всегда с маленькой буквы.
// Проверка работает таким образом, что в куке не должно быть ничего другого,
// однако, если ввести вручную в куки любое значение, то можно попасть на экран с картой
export function authorizationCheck(props) {
  if (
    props.pathname === "/quick-resto-test-app/map" &&
    document.cookie !== "user=test"
  ) {
    //Проверка на наличие данных о авторизации и перенеправление на страницу авторизации
    props.navigate("/quick-resto-test-app");
  } else if (
    props.pathname === "/quick-resto-test-app" &&
    document.cookie === "user=test"
  ) {
    // Проверка есть ли данные о пользователе и если есть, то оправка
    props.navigate("/quick-resto-test-app/map");
  }
}
