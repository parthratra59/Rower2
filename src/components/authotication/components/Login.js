import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import GlobalStyle from "../../../GlobalStyle";


const Login = () => {
  <GlobalStyle />
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const myStyle = {
    color: "red",
  }
  const formStyle = {
    border: "none",
    position: "relative",
    justifyContent: "center",
    marginLeft: "20%",
    backgroundColor: "black",
  }

  return (
    <>
      <div className="loginDiv">
        <Form onSubmit={handleSubmit} style={formStyle}>
          <h1 className="" style={{ color: "#f8dc5d", fontSize: "25px", marginBottom: "4%" }}>Firebase Auth Login</h1>
          {error && <Alert variant="danger" style={myStyle}>{error}</Alert>}

          <Form.Group className="formGroup" controlId="formBasicEmail">
            <Form.Control
              style={{ color: "#f8dc5d", }}
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formGroup" controlId="formBasicPassword">
            <Form.Control
              style={{ color: "#f8dc5d", }}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}

            />
          </Form.Group>

          <div className="">
            <Button variant="" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <div style={{ width: "80%", height: "15px", borderBottom: "1px solid #f8dc5d", textAlign: "center", marginLeft: "10%" }}>
          <span style={{ fontSize: "20px", backgroundColor: " black", padding: "10px", color: "#f8dc5d" }}>
            OR
          </span>
        </div>
        <div style={{ marginLeft: "30%", marginTop: "4%" }}>
          <GoogleButton
            className=""
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <Link to="/phonesignup">
          <div className="" style={{ marginLeft: "30%" }}>
            <Button variant="success" type="Submit" style={{ marginLeft: "10%" }}>
              Sign in with phone
            </Button>
          </div>
        </Link>
        <br />
        <br />
        <div className="" style={{ color: "#f8dc5d" }}>
          Don't have an account? <Link to="/signup" style={{ color: "#f8dc5d" }}>Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
