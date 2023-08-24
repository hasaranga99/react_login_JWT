import React from "react";


function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2>Sign-In</h2>
      <form>
        <div className="mb-3">
        <label htmlFor="email"><strong>Email</strong></label>
        <input type="email" placeholder="Enter Email" name="email" autoComplete="off" className="form-control rounded-0"></input>
        </div>
        <div className="mb-3">
        <label htmlFor="password"><strong>Password</strong></label>
        <input type="password" placeholder="Enter Password" name="password" autoComplete="off" className="form-control rounded-0"></input>
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
        <p className="d-flex justify-content-center align-items-center ">You are agree to our terms and policies</p>
        <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Register</button>
      </form>
      </div>

    </div>
  );
}

export default Login;
