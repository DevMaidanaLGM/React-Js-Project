import React, {useState} from 'react';
import { Image, Form, FormControl, Button, InputGroup, Container, Row, Col,Navbar, Nav } from 'react-bootstrap';
import '../styles/navbar.css';
import { BrowserRouter as Router, Switch,useHistory, Route, Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

export default function NavBar(filter){



    const history = useHistory();
    const [input, setInput] = useState('')

    function searchAnime(){
        console.log(input)
        filter.filter(input)
        history.push('/home')
    }

    return (


      <>
      <Container className="w-100 justify-content-center d-flex align-items-center" >
    <Row className=" col-12 col-lg-4 col-sm-12 d-flex justify-content-end">
      <Link to="/">
          <img className="logo m-0" width="250"src="./img/giama_logo.png"></img>
      </Link>

    </Row>
  <Row className="navbar navbarContainerCustom col-12 col-lg-8 col-sm-12 my-0 py-0">
      <Navbar expand="lg" variant="dark">
        <Container>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto w-100 ">

               <Col>
                     <Link className="linkCustom mx-0" to="/about">About</Link>
                </Col>
                <Col>

                     <Link className="linkCustom mx-0" to="/contact">Contact</Link>
                 </Col>
                 <Col>

                       <InputGroup  className="mx-0 px-0 w-100">
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

               </Nav>
           </Navbar.Collapse>
        </Container>
      </Navbar>
</Row>
</Container>


        </>
    )
}
