import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CookieCheck } from "../../utils/cookie-check";
import TestData from "../../utils/model.json";
import { ReactDOM } from "react";
import TestSvg from "../../utils/tutzing.svg";
import ImageMarker from "react-image-marker";
import "./map-style.css";
export function MapPage() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  let [markers, setMarkers] = useState([]);
  useEffect(() => {
    CookieCheck({ navigate, location });
  }); // Проверка закончился период доступа
  useEffect(() => {
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
  }, []); // Подгрузка первичных элементов
  const CustomMarker = (props) => {
    return (
      <div className="marker" style={{ display: "flex" }}>
        <div
          className="image-marker__marker image-marker__marker--default "
          data-testid="marker"
        >
          {/* {props.itemNumber} */}
        </div>

        <div className="text" style={{ color: "black", marginLeft: "2rem" }}>
          {props?.textMark} x{props?.amount}
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          document.cookie = "user=; max-age=0"; // Удаляем cookie
          navigate("/"); // Переносим на логин страницу
        }}
      >
        Выход
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
