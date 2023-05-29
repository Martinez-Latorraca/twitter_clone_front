import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Home from "./features/home/components/Home";
import ProtectedRoutes from "./routes/protectedRoutes";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<ProtectedRoutes />}>
            <Route exact path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
