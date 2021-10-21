import React, { useEffect,useState } from 'react';
import NavBar from './partials/navBar';
// import SideBar from './partials/sideBar';
import Footer from './partials/footer';
import Anime from './anime/anime';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './about';
import Detail from './anime/detail';

export default function Home(){

    const [animes, setAnimes] = useState([]);

    // const [list, setList] = useState([]);

    const [key, setKey] = useState('');

    // const [limit,setLimit] = useState(20);

    function filter(key){
        if(key){
            setAnimes(animes.filter(anime => anime.title.includes(key)))
        }else{
            getData()
        }
        // console.log(animes)
    }


    function getData(limit){
        limit = limit ? limit : 20
        Axios.get('https://api.jikan.moe/v3/top/anime/1')
            .then((info) => {
                let array = info.data.top.slice(0,limit)
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
            <button onClick={() => getData(50)}>Show 50</button>
            <Switch>
                <Route exact path="/">
                    {animes && <Anime  lista={(key) ? filter(animes) : animes} />}
                </Route>
                {/* {animes && <Anime animes={animes}/>} */}
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/animeDetail/:id">
                    <Detail/>
                </Route>
                <Footer />
            </Switch>
        </>
    )
}