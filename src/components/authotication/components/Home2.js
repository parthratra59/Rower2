import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home2 = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const mystyle = {
    fontFamily: "'Roboto Mono', monospace",
    color: "#f8dc5d",
    padding: "5%",
    margin: "5%",
    lineHeight: "150%",
    border: "5px solid black",
    borderRadius: "25px",
    fontSize: "35px",
    backgroundColor: "black",
    textAlign: "center"
  };
  const mystyleH1 = {
    fontFamily: "'Roboto Mono', monospace",
    color: "#f8dc5d",
    lineHeight: "200%",
    borderRadius: "25px",
    fontSize: "30px",
    backgroundColor: "black",
    textAlign: "center"
  };
  return (
    <>
      <p style={mystyle} className="homeParagraph">

        <div className="p-4 box mt-3 text-center" >
          <h1 style={mystyleH1}>Welcome</h1>
          <h1 style={mystyleH1}>{user && user.email}</h1>
          <br />
          <h1 style={mystyleH1}>&lt;&gt;</h1>
        </div>
        <span className="s0">"</span><span className="s1">R</span><span className="s2">O</span><span className="s3" >W</span><span className="s4">E</span><span className="s5">R</span> TAXI PROVIDE CHEAP AND FUN  TRAVEL  TO THE STUDENTS,   AND HELP  THEM POOL TAXI’S
        EASILY~! TRAVELLING MINIMUM 30KM TO REACH THER HEART OF THE PINK CITY HAS ALWAYS LED TO EMPTY POCKETS OF CUSTOMER.
        -!NOT ANYMORE!-

        <h1 style={mystyleH1}>&lt;/&gt;</h1>
      </p>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout} style={{ marginLeft: "45%" }}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home2;
