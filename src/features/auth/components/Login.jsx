import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, clearUser } from "../userSlice";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerSubmit = () => {
    try {
      const getUserCredentials = async () => {
        const response = await axios.post(
          `http://localhost:3000/login?email=${email}&password=${password}`
        );
        dispatch(setUser(response.data));
      };

      getUserCredentials();
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-none d-md-block d-lg-block col-md-6 col-lg-8 text-white rounded-start"></div>
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
          <form className="w-100 p-3">
            <h1>Login</h1>
            <small>Ready to start using Twitter?</small>
            <div className="form my-3">
              <input
                type="text"
                className="form-control mb-3"
                id="email"
                name="email"
                placeholder="Username or email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid my-3">
              <button
                id="logInButton"
                className="btn rounded-pill btn-fluid text-white mb-5"
                type="submit"
                onClick={handlerSubmit}
              >
                Login
              </button>
            </div>

            <small className="d-block text-center">
              Don't have an account? <a href="/users/signUp">Sign Up</a>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
