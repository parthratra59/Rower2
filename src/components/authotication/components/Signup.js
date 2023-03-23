import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { UserAuthContextProvider } from "../context/UserAuthContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const formStyle = {
    border: "none",
    position: "relative",
    justifyContent: "center",
    marginLeft: "20%",
    backgroundColor: "black",
  }
  return (
    <>
      <UserAuthContextProvider />
      <div className="loginDiv">
        <h1 className="" style={{ color: "#f8dc5d", fontSize: "25px", marginBottom: "4%", marginLeft: "23%" }}>Firebase Auth Signup</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} style={formStyle}>
          <Form.Group className="formGroup" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              style={{ color: "#f8dc5d" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="formGroup" controlId="formBasicPassword">
            <Form.Control
              style={{ color: "#f8dc5d" }}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
          <br />
          <div className="" style={{ marginLeft: "20%", color: "#f8dc5d", marginTop: "10%" }}>
            <p style={{ color: "#f8dc5d", marginTop: "10%" }}>
              Already have an account? <Link to="/Login" style={{ color: "#f8dc5d", }}>Log In</Link>
            </p>
          </div>
        </Form>
      </div>

    </>
  );
};

export default Signup;
