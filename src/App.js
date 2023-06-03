import { Routes, Route } from "react-router";
import { AuthorizationPage } from "./pages/authorization/authorization";
import { MapPage } from "./pages/map/map";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" Component={AuthorizationPage} />
          <Route path="/map" Component={MapPage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
