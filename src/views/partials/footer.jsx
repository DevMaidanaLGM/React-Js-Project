import React from 'react';
import '../styles/footer.css';
import { Row, Col,Container } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Footer(){

    return (
        <Container fluid>
        <Row className="pt-5">
          <Col>
            <div className="bg-black appCopyright py-0 mt-0 shadow d-flex justify-content-evenly" >
              <p className="contacts mt-1">Leonardo
                <a
                  href="https://www.facebook.com/MaxLGM">
                  <Facebook width="12px" height="12px"/>
                </a>
                <a
                  href="https://www.instagram.com/elhombreguiso/">
                  <Instagram width="12px" height="12px"></Instagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-maidana-1a2482223/">
                  <Linkedin width="12px" height="12px"></Linkedin>
                </a>
                   <br/>
              </p>
              <p className="contacts mt-1">Pablo
                <a
                  href="https://www.facebook.com/pablo.garcia.pr">
                  <Facebook width="12px" height="12px"/>
                </a>
                <a
                  href="https://www.instagram.com/pablo.garcia.22/">
                  <Instagram width="12px" height="12px"></Instagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/pablo-garcia-jujuy/">
                  <Linkedin width="12px" height="12px"></Linkedin>
                </a>
                   <br/>
              </p>

            </div>
          </Col>
          <Col>
            <div className="bg-black text-center appCopyright py-0 shadow">
                GIAMA | Copyright © {new Date().getFullYear()}
            </div>
          </Col>
          <Col>
            <div className="bg-black text-center appCopyright py-0 shadow" >
              <Link to="/contact">Contact with us!</Link>
            </div>
          </Col>
        </Row>
        </Container>
    )
}
