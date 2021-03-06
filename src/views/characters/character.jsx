import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Axios from 'axios';
import { Image, Card, Container, Row, Col } from 'react-bootstrap';
import './character.css';

export default function Character(){

    const [characters, setCharacters] = useState([])

    const params = useParams()

    useEffect( () => {
      Axios.get('https://api.jikan.moe/v3/anime/'+params.id+'/characters_staff')
        .then((info) => {
          setCharacters(info.data.characters)
          console.log(characters)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    function goTo(uri){
        window.open(uri,"_blank")
    }

    return (
        (characters.length !=0) ? (
            <Container>
                <Row>
                    {
                        characters.map((character) => {
                            return (
                                <Col key={character.mal_id}>
                                    <Card className="card-character" onClick={() => goTo(character.url)}>
                                        <Card.Img variant="top" src={character.image_url}/>
                                        <Card.Body>
                                            <Card.Title>{character.name}</Card.Title>
                                        </Card.Body>
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