import React, {useState} from 'react';
import { Image, Form, FormControl, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../styles/navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
export default function NavBar(filter){

    const [input, setInput] = useState('')

    function searchAnime(){
        console.log(input)
        filter.filter(input)
    }

    return (
        <Container fluid className="w-100 justify-content-center d-flex align-items-center">
            <Row className=" col-12 col-lg-4">
                <Link to="/">
                    <img className="logo" width="200"src="./img/giama_logo.png"></img>
                </Link>
            </Row>
            <Row className="navbar navbarContainerCustom col-12 col-lg-8">
                <Col className="text-center column">
                    <Link className="linkCustom" to="/about">About</Link>
                </Col>
                <Col className="text-center column">
                    <Link className="linkCustom" to="/contact">Contact</Link>
                </Col>
                <Col>
                    <InputGroup>
                        <FormControl
                            className="searcher"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="basic-addon2"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button
                            className="btnSearch"
                            variant="outline-success"
                            id="button-addon2"
                            onClick={() => searchAnime()}>
                            <Search height="auto" color="royalblue" />
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}
