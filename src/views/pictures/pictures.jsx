import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Axios from 'axios';
import { Image, Card, Container, Row, Col } from 'react-bootstrap';
import './pictures.css';

export default function Picture(){

    const [pictures, setPictures] = useState([])

    const params = useParams()

    useEffect( () => {
      Axios.get('https://api.jikan.moe/v3/anime/'+params.id+'/pictures')
        .then((info) => {
          setPictures(info.data.pictures)
          console.log(pictures)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    function goTo(uri){
        window.open(uri,"_blank")
    }

    return (
        (pictures.length !=0) ? (
            <Container>
                <Row>
                    {
                        pictures.map((picture) => {
                            return (
                                <Col key={picture.small}>
                                    <Card className="card-picture">
                                        <Card.Img variant="top" src={picture.large}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        ) : (
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <img src="../img/loading.gif" width="200px"/>
                <h1>Loading...</h1>
            </div>
        )
    )
}