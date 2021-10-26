import React, {useState} from 'react';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/landingPage.css';
import About from './about';
import Home from './home';

export default function landingPage(){




    return (
      <>
        <Container fluid className="d-flex align-items-center pt-4">
                  <Link className="goLink align-items-center" to="/home">Home</Link>
                <Link to="/">
                    <img className="logo w-100 fluid align-items-center"src="./img/giama_logo.png"></img>
                </Link>
                  <Link className="goLink align-items-center" to="/about">About</Link>
        </Container>
      </>
    )
}
