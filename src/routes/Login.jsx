function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="d-none d-md-block d-lg-block col-md-6 col-lg-8 text-white rounded-start"></div>
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
          <form method="post" className="w-100 p-3">
            <h1>Login</h1>
            <small>Ready to start using Twitter?</small>
            <div className="form my-3">
              <input
                type="text"
                className="form-control mb-3"
                id="userName"
                name="username"
                placeholder="Username or email"
              />

              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="d-grid my-3">
              <button
                id="logInButton"
                className="btn rounded-pill btn-fluid text-white mb-5"
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
