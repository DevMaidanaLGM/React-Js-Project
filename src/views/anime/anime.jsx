import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import './anime.css';

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
                        <h1>{first.title}</h1>
                        <img src={first.image_url} alt={first.title} className="principal-image"/>
                        <h3>Type: {first.type}</h3>
                        <h3>Episodes: {first.episodes}</h3>
                        <h3>Start Date: {first.start_date}</h3>
                        <h3>End Date: {first.end_date}</h3>
                    </div>
                    <div>
                        {/* <h1>Trailer:</h1>
                        <iframe width="420" height="315"
                            src={first.}>
                            </iframe> */}
                    </div>
                </div>
            </div>
            <div className="container">
                {
                    animes.map((anime) => {
                        return (
                            <div className="card" onClick={ () => {setFirst(anime)}}>
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