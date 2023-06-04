import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CookieCheck } from "../../utils/cookie-check";

import ImageMarker from "react-image-marker";
import TestData from "../../utils/model.json";
import TestSvg from "../../utils/tutzing.svg";
import "./map-style.css";
export function MapPage() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  let [markers, setMarkers] = useState([]);
  useEffect(() => {
    CookieCheck({ navigate, location });
  }); // Проверка закончился период доступа
  useEffect(() => {
    var localData = JSON.parse(localStorage.getItem("data"));
    if (localData) {
      //Добавление макетов, если есть данные в localStorage
      localData.forEach((data) => {
        setMarkers((oldData) => [
          ...oldData,
          {
            top: data.top,
            left: data.left,
            textMark: data.textMark,
            amount: data.amount,
          },
        ]);
      });
    } else {
      // Данных нет, берем данные из файла
      TestData.forEach((data) => {
        setMarkers((oldData) => [
          ...oldData,
          {
            top: data.x,
            left: data.y - 3,
            textMark: data.name,
            amount: data.amount,
          },
        ]);
      });
    }
  }, []); // Подгрузка первичных элементов
  const CustomMarker = (props) => {
    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const [editable, setEditable] = useState(false);
    useEffect(() => {
      if (props.amount === undefined && props.textMark === undefined) {
        setEditable(true);
      }
    }, [props]); // Активируется в случае добавления новых элементов
    return (
      <div className="marker" style={{ display: "flex" }}>
        <div
          className="image-marker__marker image-marker__marker--default "
          data-testid="marker"
        ></div>

        <div className="text" style={{ color: "black", marginLeft: "2rem" }}>
          {editable ? ( // Проверка находится ли маркер в режиме редактирования
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  let sendData = markers.map((each) => {
                    if (each.top === props.top && each.left === props.left) {
                      //Поиск необходимого элемента по координентам
                      return { ...each, textMark: name, amount: amount }; // Изменение данных
                    } else {
                      return each;
                    }
                  });
                  setMarkers(sendData);
                  localStorage.setItem("data", JSON.stringify(sendData)); //Добавление измененных данных в localStorage
                  setEditable(false);
                }}
              >
                <input // Поле ввода наименования элемента
                  className="map-input"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Имя"
                />
                <input // Поле ввода количества элементов
                  className="map-input"
                  type="text"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  placeholder="Кол-во"
                />
                <button className="map-change-button">Save</button>
              </form>
            </>
          ) : (
            <>
              {props?.textMark} x{props?.amount}
              <button
                className="map-change-button"
                onClick={() => {
                  let deleteData = markers.filter((el) =>
                    el?.top === props?.top && el?.left === props?.left // Удаление элемента с определенными координатами
                      ? false
                      : true
                  );
                  setMarkers(deleteData);
                  localStorage.setItem("data", JSON.stringify(deleteData)); // Перенос измененных даннных
                }}
              >
                x
              </button>
              <button
                className="map-change-button"
                onClick={() => {
                  setEditable(true);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        className="exit-button" //Кнопка выхода на страницу авторазицию
        onClick={() => {
          document.cookie = "user=; max-age=0"; // Удаляем cookie
          navigate("/quick-resto-test-app"); // Переносим на логин страницу
        }}
      >
        Выход
      </button>
      <button
        onClick={() => {
          //Кнопка сбросса
          localStorage.removeItem("data"); // Удаление Array-я с LocalStorage-жа
          setMarkers([]); // Чистка текущих маркеров
          TestData.forEach((data) => {
            setMarkers((oldData) => [
              // Получения данных из файла
              ...oldData,
              {
                top: data.x,
                left: data.y - 3,
                textMark: data.name,
                amount: data.amount,
              },
            ]);
          });
        }}
        className="reset-button"
      >
        Сбросить
      </button>
      <div className="map-container">
        <ImageMarker
          src={TestSvg}
          markers={markers}
          onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
          markerComponent={CustomMarker}
        />
      </div>
    </>
  );
}
