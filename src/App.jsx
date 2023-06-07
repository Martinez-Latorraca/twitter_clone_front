import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./features/auth/components/Login";
import Home from "./features/home/Home";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            user.token ? <Home /> : <Navigate to="/login" replace={true} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
