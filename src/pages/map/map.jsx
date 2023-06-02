import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CookieCheck } from "../../utils/cookie-check";
import { Map } from "react-canvas-map";
import { ReactDOM } from "react";
import TestSvg from "../../utils/tutzing.svg";
export function MapPage() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    CookieCheck({ navigate, location });
  });
  return (
    <div>
      <img src={TestSvg} alt="logo" />
    </div>
  );
}
