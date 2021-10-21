import React, { useEffect,useState } from 'react';
import SideBar from '../partials/sideBar'
import { Link } from 'react-router-dom';
import './anime.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
export default function Anime({animes}){

    const [first, setFirst] = useState('')

    useEffect( () => {
        setFirst(animes[0])
    },[])

    const [key,setKey] = useState(false)

    function filterSidebar(key){
        // const list = animes
        // if(key){
        //     animes = list.filter((e) => e.type == key)
        // }
        console.log('estado',key)
    }

    if(animes.length === 0){
        return (
            <>
                <div className="w-100">
                    <div className="container">
                        <h1>Nothing here... :(</h1>
                    </div>
                </div>
            </>
        )
    }else{
        return (
<>
<div>


  <Carousel>
    <Carousel.Item interval={1000}>
      <div className="row d-flex justify-content-center px-5">
        <div className="col-12 col-lg-5 d-flex justify-content-center">

            <div>
                <img src={animes[0].image_url} alt={animes[0].title} className="principal-image"/>
            </div>
          </div>
            <div className="col-12 col-lg-7 d-flex flex-column ">
                <h1>{animes[0].title}</h1>
                <h3>Type: {animes[0].type}</h3>
                <h3>Episodes: {animes[0].episodes}</h3>
                <h3>Start Date: {animes[0].start_date}</h3>
                <h3>End Date: {animes[0].end_date}</h3>
                <div className="container mt-5 w-100">
                    <div className="row d-flex w-100">
                        <div className="col-lg-5">
                            <Link to={"animeDetail/" + animes[0].mal_id}>
                                <a className="w-75 button_slide slide_right">More Info</a>
                            </Link>
                        </div>
                        <div className="col-lg-7">
                            <a className="w-75 button_slide slide_right" href={animes[0].url} target="_blank">My Anime List</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <div className="row d-flex justify-content-center px-5">
        <div className="col-12 col-lg-5 d-flex justify-content-center">

            <div>
                <img src={animes[1].image_url} alt={animes[1].title} className="principal-image"/>
            </div>
          </div>
            <div className="col-12 col-lg-7 d-flex flex-column ">
                <h1>{animes[1].title}</h1>
                <h3>Type: {animes[1].type}</h3>
                <h3>Episodes: {animes[1].episodes}</h3>
                <h3>Start Date: {animes[1].start_date}</h3>
                <h3>End Date: {animes[1].end_date}</h3>
                <div className="container mt-5 w-100">
                    <div className="row d-flex w-100">
                        <div className="col-lg-5">
                            <Link to={"animeDetail/" + animes[1].mal_id}>
                                <a className="w-75 button_slide slide_right">More Info</a>
                            </Link>
                        </div>
                        <div className="col-lg-7">
                            <a className="w-75 button_slide slide_right" href={animes[1].url} target="_blank">My Anime List</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="row d-flex justify-content-center px-5">
        <div className="col-12 col-lg-5 d-flex justify-content-center">

            <div>
                <img src={animes[2].image_url} alt={animes[2].title} className="principal-image"/>
            </div>
          </div>
            <div className="col-12 col-lg-7 d-flex flex-column">
                <h1>{animes[2].title}</h1>
                <h3>Type: {animes[2].type}</h3>
                <h3>Episodes: {animes[2].episodes}</h3>
                <h3>Start Date: {animes[2].start_date}</h3>
                <h3>End Date: {animes[2].end_date}</h3>
                <div className="container mt-5 w-100">
                    <div className="row d-flex w-100">
                        <div className="col-lg-5">
                            <Link to={"animeDetail/" + animes[1].mal_id}>
                                <a className="w-75 button_slide slide_right">More Info</a>
                            </Link>
                        </div>
                        <div className="col-lg-7">
                            <a className="w-75 button_slide slide_right" href={animes[2].url} target="_blank">My Anime List</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Carousel.Item>
  </Carousel>


</div>

            <div className="w-100">
                <SideBar filterSidebar={filterSidebar}/>
                {first && (
                    <div className="container">
                    <div className="first">
                        <div>
                            <img src={first.image_url} alt={first.title} className="principal-image"/>
                        </div>
                        <div className="row w-100">
                            <h1>{first.title}</h1>
                            <h3>Type: {first.type}</h3>
                            <h3>Episodes: {first.episodes}</h3>
                            <h3>Start Date: {first.start_date}</h3>
                            <h3>End Date: {first.end_date}</h3>
                            <div className="container mt-5 w-100">
                                <div className="row d-flex w-100">
                                    <div className="col-lg-5">
                                        <Link to={"animeDetail/" + first.mal_id}>
                                            <a className="w-100 button_slide slide_right">More Info</a>
                                        </Link>
                                    </div>
                                    <div className="col-lg-7">
                                        <a className="w-100 button_slide slide_right" href={first.url} target="_blank">My Anime List</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
                <div className="container">
                    {
                        animes.map((anime) => {
                            return (
                                <div className="card" onClick={ () => {setFirst(anime)}} key={anime.mal_id}>
                                    <img src={anime.image_url} alt={anime.title} className="image"/>
                                    <div className="title">{anime.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }


}
