import React, { useEffect,useState } from 'react';
import NavBar from './partials/navBar';
import SideBar from './partials/sideBar';
import Footer from './partials/footer';
import Anime from './anime/anime';
import Axios from 'axios';

export default function Home(){

    const [animes, setAnimes] = useState([]);

    // const [list, setList] = useState([]);

    const [key, setKey] = useState('');

    function filter(key){
        if(key){
            setAnimes(animes.filter(anime => anime.title.includes(key)))
        }else{
            getData()
        }
        // console.log(animes)
    }

    function getData(){
        Axios.get('https://api.jikan.moe/v3/top/anime/1')
            .then((info) => {
                let array = info.data.top.slice(0,20)
                setAnimes(array)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect( () => {
        getData()
    },[])

    return (
        <>
            <NavBar filter={filter} />
            <SideBar />
            {/* {animes && <Anime animes={animes}/>} */}
            {animes && <Anime  animes={(key) ? filter(animes) : animes} />}
            <Footer />
        </>
    )
}