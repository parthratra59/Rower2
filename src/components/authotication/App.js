import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../authotication/components/Home"
import Login from "../authotication/components/Login"
import PhoneSignUp from "../authotication/components/PhoneSignUp"
import ProtectedRoute from "../authotication/components/ProtectedRoute"


import { UserAuthContextProvider } from "./context/UserAuthContext";
import Signup from "../authotication/components/Signup"
import React from "react";
import GlobalStyle from "../GlobalStyle";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import Home from "../Home";
import PublishRide from "./PublishRide";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainLogo from "./mainLogo";
import CustomerCard from "./customerCard";


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
          <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" exact element={<Login />} />
              <Route path="/phonesignup" exact element={<PhoneSignUp/>} />
              <Route path="/signup"  exact element={<Signup />} />
              
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
