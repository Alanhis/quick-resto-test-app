import { useLocation, useNavigate } from "react-router";

export function CookieCheck(props) {
  if (props.location === "/map" && document.cookie === "") {
    props.navigate("/");
  } else if (props.location === "/" && document.cookie !== "") {
    props.navigate("/map");
  }
}
