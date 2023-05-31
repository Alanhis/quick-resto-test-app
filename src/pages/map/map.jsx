import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CookieCheck } from "../../utils/cookie-check";

export function MapPage() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    CookieCheck({ navigate, location });
  });
  return <div></div>;
}
