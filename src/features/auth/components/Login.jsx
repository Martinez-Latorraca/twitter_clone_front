import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../userSlice";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: `http://localhost:3000/login`,
        data: {
          email: email,
          password: password,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setUserCredentials(response.data));
      setUser(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (user) {
      console.log(user.token);
      navigate("/");
    }
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <div className="d-none d-md-block d-lg-block col-md-6 col-lg-8 text-white rounded-start"></div>
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
          <form className="w-100 p-3" onSubmit={handlerSubmit}>
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
                className="btn rounded-pill btn-fluid text-white mb-5 twitter-blue"
                type="submit"
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
