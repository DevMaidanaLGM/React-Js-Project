import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Axios from 'axios';
import { Image, Form, FormControl, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../styles/anime/detail.css';
export default function Detail(){

    const [anime, setAnime] = useState(false)

    const params = useParams()

    useEffect( () => {
      Axios.get('https://api.jikan.moe/v3/anime/'+params.id)
        .then((info) => {
          setAnime(info.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    function sliceDateFrom(){
      console.log(anime.aired.from);
      let emisionFrom = anime.aired.from.toString();
      console.log("Emision from "+ emisionFrom);
      console.log(emisionFrom.slice(0,7));
      console.log("Emision from "+ emisionFrom);
      return emisionFrom;
    }

    return (
        anime ? (
            <>
            <div className="detailMainContainer inline-block justify-content-center">
                <div className="row d-flex justify-content-center border border-info mx-2 my-2 py-5 px-2">
              <div className="col-12 col-lg-4 col-sm-12 d-flex justify-content-center">



                <Col className="col align-self-center" >
                  <Row className="d-flex justify-content-center">

                  <img
                    src={anime.image_url} className="principal-image imgDetail align-self-center "/>
                  </Row>
                  <h6 className="text-center scoreH">Score</h6>
                  <p className="score">{anime.score}</p>


                  <h6 className="alternativeT text-center">
                    Alternative Titles
                  </h6>
                  <h2
                    className="secondaryTitles text-center">
                    {anime.title_english} (Eng)</h2>
                    <h2
                      className="secondaryTitles text-center">
                    {anime.title_japanese} (Jp)
                  </h2>
                  <p className="pt-2 moreInfo text-center">
                    Episodes:
                    <a className="infoDetail">
                      {anime.episodes} ({anime.type}) ({anime.duration})
                      <br></br>
                    </a>
                  </p>
                  <p className="moreInfo text-center">

                    Status:
                    <a className="infoDetail">
                      {anime.status} <br></br>
                    </a>
                  </p>
                  <p className="moreInfo text-center">

                    From:
                    <a className="infoDetail">
                        {anime.aired.from.slice(0,10)}

                    </a>
                     &emsp;To
                     <a className="infoDetail">
                         {anime.aired.to.slice(0,10)}
                     </a>
                  </p>

</Col>
              </div>

              <div className="col-12 col-lg-8 d-flex">
                <Col>
                <h1
                  class="display-4 text-primary text-center">
                  {anime.title}
                </h1>
                <hr/>
                  <h3 className="itemList text-center pb-1">
                    Synopsis
                  </h3>
                <p className="lead text-secondary">{anime.synopsis}</p>

                  <h3 className="itemListLevelTwo text-center">
                  Rating
                  </h3>
                  <p className="text-center fw-bold mb-1">{anime.rating}</p>
                  <h5 className="text-center">Producers:

                  {
                      anime.producers.map((producer) => (<a className="producers">{producer.name}</a>))
                  }
                  </h5>
                  <h5 className="text-center">Genres:

                  {
                      anime.genres.map((genre) => (<a className="producers">{genre.name}</a>))
                  }
                  </h5>
                  <h5 className="text-center">Studios:

                  {
                      anime.studios.map((studio) => (<a className="producers">{studio.name}</a>))
                  }
                  </h5>



                  </Col>

              </div>
              <hr/>
              <div className="row col-12 colg-lg-12 d-flex justify-content-center">
                <h4  className="text-center my-2">Trailer</h4>
                <iframe className="trailer" src={anime.trailer_url}></iframe>
              </div>

            </div>
              </div>
            </>
        )
        :
        (
            <h1>Loading...</h1>
        )
    )
}
