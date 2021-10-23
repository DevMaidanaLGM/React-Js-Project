import React, {useState} from 'react';
import {  Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about';
import Home from './home';

export default function landingPage(){




    return (
        <Container fluid className="d-flex  justify-content-center align-items-center">

          







            <Row className="">
              <Col className="col-12 col-lg-2">
                  <Link className="linkCustom" to="/contact">Home</Link>
              </Col>
              <Col className="col-12 col-lg-8">
                <Link to="/">
                    <img className="logo fluid"src="./img/giama_logo.png"></img>
                </Link>
              </Col>
              <Col className="col-12 col-lg-2">
                  <Link className="linkCustom" to="/about">About</Link>
              </Col>
            </Row>
        </Container>
    )
}
