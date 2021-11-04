import React, { useEffect,useState } from 'react';
import SideBar from '../partials/sideBar'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './anime.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Anime({lista}){

    const [animes, setAnimes] = useState([]);


    const [key, setKey] = useState('')

    const [list, setList] = useState(animes);

    function filterSidebar(key){

        if(key){
            setKey(key)
            setAnimes(lista.filter((e) => e.type === key))
            console.log(animes)
        }else{
            setAnimes(lista)
            setKey(false)
        }
    }

    function sort(key){

        setList(animes)
        if(key){
            setKey(key)
            if(key == 'asc'){
                setAnimes( animes.sort(function (a,b){
                    if(a.title > b.title) return 1
                    else if(a.title < b.title) return -1
                    else return 0
                }))
                console.log(animes)
            }else{
                setAnimes( animes.sort(function (a,b){
                    return -1
                }))
            }
        }else{
            setAnimes(list)
            setKey(false)
        }
    }

    useEffect( () => {

    })

    useEffect( () => {
        setAnimes(lista)
    },[lista])


    if(animes.length === 0){
        return (
            <>
                <div className="d-flex  justify-content-center align-items-center">
                    <div className="container d-flex  justify-content-center align-items-center">
                          <img className="h-50 w-50" src="./img/404.png" alt="404"/>
                    </div>
                </div>
            </>
        )
    }else{
        return (
<>
<div>


  {!key && (
      <Carousel className="py-4 px-4 mx-4 my-2">
      <Carousel.Item interval={2000}>
        <div className="row d-flex justify-content-center px-5">
          <div className="col-12 col-lg-4 d-flex justify-content-center">

                  <img src={animes[0].image_url} alt={animes[0].title} className="principal-image"/>
            </div>
              <div className="col-12 col-lg-8 d-flex flex-column ">
                  <h1>{animes[0].title}</h1>
                  <h3>Type: {animes[0].type}</h3>
                  <h3>Episodes: {animes[0].episodes}</h3>
                  <h3>Start Date: {animes[0].start_date.slice(0,10)}</h3>
                  <h3>End Date: {animes[0].end_date.slice(0,10)}</h3>
                  <div className="container mt-5 w-100">
                      <div className="row d-flex w-100">
                          <div className="col-lg-6 col-xxl-4">
                              <Link to={"animeDetail/" + animes[0].mal_id} className="w-100 button_slide slide_right">
                                  More Info
                              </Link>
                          </div>
                          <div className="col-lg-6 col-xxl-4">
                              <a className="w-100 button_slide slide_right" href={animes[0].url} target="_blank">My Anime List</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="row d-flex justify-content-center px-5">
          <div className="col-12 col-lg-4 d-flex justify-content-center">

              <div>
                  <img src={animes[1].image_url} alt={animes[1].title} className="principal-image"/>
              </div>
            </div>
              <div className="col-12 col-lg-8 d-flex flex-column ">
                  <h1>{animes[1].title}</h1>
                  <h3>Type: {animes[1].type}</h3>
                  <h3>Episodes: {animes[1].episodes}</h3>
                  <h3>Start Date: {animes[1].start_date.slice(0,10)}</h3>
                  <h3>End Date: {animes[1].end_date.slice(0,10)}</h3>
                  <div className="container mt-5 w-100">
                      <div className="row d-flex w-100">
                          <div className="col-lg-6 col-xxl-4">
                              <Link to={"animeDetail/" + animes[1].mal_id} className="w-100 button_slide slide_right">
                                  More Info
                              </Link>
                          </div>
                          <div className="col-lg-6 col-xxl-4">
                              <a className="w-100 button_slide slide_right" href={animes[1].url} target="_blank">My Anime List</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="row d-flex justify-content-center px-5">
          <div className="col-12 col-lg-4 d-flex justify-content-center">

              <div>
                  <img src={animes[2].image_url} alt={animes[2].title} className="principal-image"/>
              </div>
            </div>
              <div className="col-12 col-lg-8 d-flex flex-column">
                  <h1>{animes[2].title}</h1>
                  <h3>Type: {animes[2].type}</h3>
                  <h3>Episodes: {animes[2].episodes}</h3>
                  <h3>Start Date: {animes[2].start_date.slice(0,10)}</h3>
                  <h3>End Date: {animes[2].end_date.slice(0,10)}</h3>
                  <div className="container mt-5 w-100">
                      <div className="row d-flex w-100">
                          <div className="col-lg-6 col-xxl-4">
                              <Link to={"animeDetail/" + animes[1].mal_id} className="w-100 button_slide slide_right">
                                  More Info
                              </Link>
                          </div>
                          <div className="col-lg-6 col-xxl-4">
                              <a className="w-100 button_slide slide_right" href={animes[2].url} target="_blank">My Anime List</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Carousel.Item>
    </Carousel>
  )}


</div>

            <div className="w-100">
                <SideBar filterSidebar={filterSidebar} sort={sort} />
                {/* {first && (
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
                )} */}
                <div className="container">
                    {
                        animes.map((anime) => {
                            return (
                                <Link to={"animeDetail/" + anime.mal_id} className="card" key={anime.mal_id}>
                                    <img src={anime.image_url} alt={anime.title} className="image"/>
                                    <div className="title">{anime.title}</div>
                                </Link>
                                // <div className="card" onClick={ () => {setFirst(anime)}} key={anime.mal_id}>
                                //     <img src={anime.image_url} alt={anime.title} className="image"/>
                                //     <div className="title">{anime.title}</div>
                                // </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }


}
