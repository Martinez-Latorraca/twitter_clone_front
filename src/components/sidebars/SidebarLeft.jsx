import "./sidebars.css";
import { Link } from "react-router-dom";

function SidebarLeft() {
  return (
    <nav className="sidebar-left">
      <a href="/" className="mt-1 nav-btn">
        <img
          src="/src/assets/twitter-icons/icons/twitter-logo.svg"
          alt="Logo de twitter, presiona para ir al home"
        />
      </a>
      <a href="/" className="nav-btn disable-text-btn">
        <img
          src="/src/assets/twitter-icons/icons/home.svg"
          alt="Logo de home, presiona para ir a home"
          className="me-2"
        />
        <span> Home</span>
      </a>
      <a href="/users/<%=user.username %>" className="nav-btn disable-text-btn">
        <img
          src="/src/assets/twitter-icons/icons/profile.svg"
          alt="Icono de perfil, presiona para ir a tu perfil"
          className="me-2"
        />
        <span>Profile</span>
      </a>

      <a className="nav-btn btn-tweet disable-text-btn">
        <img
          src="/src/assets/twitter-icons/icons/write.svg"
          alt=""
          className="me-2"
        />{" "}
        <span>Tweet</span>
      </a>

      <a className="nav-btn btn-logout disable-text-btn" href="/logout">
        <img
          src="/src/assets/twitter-icons/icons/logout.png"
          alt="Logo de salida, presiona para cerrar tu sesión"
          className="me-2"
        />
        <span>Logout</span>
      </a>
    </nav>
  );
}

export default SidebarLeft;
