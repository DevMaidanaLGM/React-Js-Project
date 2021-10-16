import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import './anime.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Anime(){

    const [animes, setAnimes] = useState([]);

    const [first, setFirst] = useState('')

    
    useEffect( () => {
        Axios.get('https://api.jikan.moe/v3/top/anime/1')
            .then((info) => {
                // console.log(info.data.top)
                setAnimes(info.data.top)
                setFirst(info.data.top[0])
                // console.log(first)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    
    return (
        <div className="w-100">
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
                                    <a className="w-100 button_slide slide_right">More Info</a>
                                </div>
                                <div className="col-lg-7">
                                    <a className="w-100 button_slide slide_right" href={first.url} target="_blank">My Anime List</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    )
}