import axios from "axios";
import { useNavigate } from "react-router-dom";

import { clearUser } from "../userSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogout = async () => {
    console.log("loged out");
    localStorage.removeItem("token");
    dispatch(clearUser());
    const res = await axios.get("http://localhost:3000/logout");
    navigate("/login");
  };

  return (
    <button
      onClick={() => handlerLogout()}
      className="nav-btn btn-logout disable-text-btn"
    >
      <img
        src="/src/assets/twitter-icons/icons/logout.png"
        alt="Logo de salida, presiona para cerrar tu sesión"
        className="me-2"
      />
      <span>Logout</span>
    </button>
  );
}

export default LogoutBtn;
