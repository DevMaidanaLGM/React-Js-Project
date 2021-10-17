import React, {useState} from 'react';
import { Image, Form, FormControl, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../styles/navbar.css';

export default function NavBar(filter){

    const [input, setInput] = useState('')

    function searchAnime(){
        // console.log(input)
        filter.filter(input)
    }

    return (

        <Container fluid className="mt-3">
            <Row className="navbar">
                <Col className="text-center">Icon</Col>
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
                <Col className="text-center">About</Col>
            </Row>
        </Container>
    )
}