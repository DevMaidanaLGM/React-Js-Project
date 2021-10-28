import React, { useEffect,useState } from 'react';
import NavBar from './partials/navBar';
// import SideBar from './partials/sideBar';
import Footer from './partials/footer';
import Anime from './anime/anime';
import Character from './characters/character';
import LandingPage from './landingPage';
import Picture from './pictures/pictures';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './about';
import Detail from './anime/detail';
import Contact from './contact';
import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home(){

    const [lista, setLista] = useState([]);

    // const [list, setList] = useState([]);

    const [key, setKey] = useState('');

    // const [limit,setLimit] = useState(20);

    // function filter(key){
    //     console.log(key)
    //     if(key){
    //         const lista2 = lista.filter(anime => anime.title.includes(key))
    //         setLista(lista2)
    //         console.log(lista)
    //     }else{
    //         getData()
    //     }
    //     console.log(lista)
    // }

    function showmeMore(){

      let i;

      if (lista.length<50){
        getData(50);
      }else{

        i = (lista.length/50)+1;


        Axios.get('https://api.jikan.moe/v3/top/anime/'+i)
            .then((info) => {
                let array = info.data.top;
                array=lista.concat(array);
                setLista(array);
                
            })
            .catch((err) => {
                console.log(err)
            })
      }
    }


    function filter(animeToSearch){
      let apiUrl = 'https://api.jikan.moe/v3/search/anime?q='+ animeToSearch
      console.log(apiUrl)
      Axios.get(apiUrl)
          .then((info) => {
            let array = info.data.results
            console.log(info.data.results)
              setLista(array)
          })
          .catch((err) => {
              console.log(err)
          })
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


            <Switch>
                <Route exact path="/home">
                    <NavBar filter={filter} />
                    {lista && <Anime  lista={(key) ? filter(lista) : lista} />}
                    <div className="row d-flex justify-content-center ">
                        <button className="showMeMore" onClick={() => showmeMore()}>Show me more!</button>
                    </div>
                </Route>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                {/* {animes && <Anime animes={animes}/>} */}
                <Route exact path="/about">
                    <NavBar filter={filter} />
                    <About/>
                </Route>
                <Route exact path="/characters/:id">
                    <NavBar filter={filter} />
                    <Character />
                </Route>
                <Route exact path="/pictures/:id">
                    <NavBar filter={filter} />
                    <Picture />
                </Route>
                <Route exact path="/contact">
                    <NavBar filter={filter} />
                    <Contact/>
                </Route>
                <Route exact path="/animeDetail/:id">
                    <NavBar filter={filter} />
                    <Detail/>
                </Route>
                <Route>
                  <div className="d-column  justify-content-center align-items-center">
                      <div className="container d-flex flex-column  justify-content-center align-items-center">
                            <img className="h-50 w-50" src="./img/404.png" alt="404"/>
                            <Link className="showMeMore align-items-center" to="/">Okay, take me back</Link>

                      </div>
                  </div>
                </Route>


            </Switch>

          </div>
        </>
    )
}
