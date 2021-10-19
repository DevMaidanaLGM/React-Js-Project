import React, {useState} from 'react';
import { Image, Form, FormControl, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../styles/navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function NavBar(filter){

    const [input, setInput] = useState('')

    function searchAnime(){
        // console.log(input)
        filter.filter(input)
    }

    return (

        <Container fluid className="mt-3">
            <Row className="navbar">
                <Col className="text-center">
                    <Link to="/">
                      <img width="400" height="369" className="fluid" src="./img/giama_logo.png"></img>
                    </Link>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="basic-addon2"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button variant="outline-success" id="button-addon2" onClick={() => searchAnime()}>Button</Button>
                    </InputGroup>
                </Col>
                <Col className="text-center">
                    <Link to="/about">About</Link>
                </Col>
                <Col className="text-center">
                    <Link to="/contact">Contact</Link>
                </Col>
            </Row>
        </Container>
    )
}
