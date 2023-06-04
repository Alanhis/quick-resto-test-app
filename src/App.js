import { Routes, Route } from "react-router";
import { AuthorizationPage } from "./pages/authorization/authorization";
import { MapPage } from "./pages/map/map";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/quick-resto-test-app" Component={AuthorizationPage} />
          <Route path="/quick-resto-test-app/map" Component={MapPage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
