import React, { useEffect,useState } from 'react';
import NavBar from './partials/navBar';
// import SideBar from './partials/sideBar';
import Footer from './partials/footer';
import Anime from './anime/anime';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './about';
import Detail from './anime/detail';
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home(){

    const [lista, setLista] = useState([]);

    // const [list, setList] = useState([]);

    const [key, setKey] = useState('');

    // const [limit,setLimit] = useState(20);

    function filter(key){
        console.log(key)
        if(key){
            const lista2 = lista.filter(anime => anime.title.includes(key))
            setLista(lista2)
            console.log(lista)
        }else{
            getData()
        }
        console.log(lista)
    }


    function getData(limit){
        limit = limit ? limit : 20
        Axios.get('https://api.jikan.moe/v3/top/anime/1')
            .then((info) => {
                let array = info.data.top.slice(0,limit)
                setLista(array)
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
        <div className="mx-4 my-4">
            <NavBar filter={filter} />
            <button onClick={() => getData(50)}>Show 50</button>
            <Switch>
                <Route exact path="/">
                    {lista && <Anime  lista={(key) ? filter(lista) : lista} />}
                </Route>
                {/* {animes && <Anime animes={animes}/>} */}
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route exact path="/animeDetail/:id">
                    <Detail/>
                </Route>
                <Footer />
            </Switch>
          </div>
        </>
    )
}
