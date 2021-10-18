import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"
import Axios from 'axios'

export default function Detail(){

    const [anime, setAnime] = useState(false)

    const params = useParams()

    useEffect( () => {
        Axios.get('https://api.jikan.moe/v3/anime/'+params.id)
            .then((info) => {
                console.log(info.data)
                setAnime(info.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        anime ? (
            <>
                <h1>Title: {anime.title}</h1>
                <h2>Title (Eng): {anime.title_english}</h2>
                <h2>Title (Jp): {anime.title_japanese}</h2>
                <p>Synopsis: {anime.synopsis}</p>
                <p>Rating: {anime.rating}</p>
                <p>Producers:</p>
                {
                    anime.producers.map((producer) => (<p>{producer.name}</p>))
                }
                <h6>Trailer:</h6>
                <iframe src={anime.trailer_url}></iframe>
            </> 
        )
        :
        (
            <h1>Loading...</h1>
        )
    )
}