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

    const [key, setKey] = useState('');

    function showmeMore(){

        /** 
         * This is the method to show more animes
         * 
         * This validate how much animes are in the main array 
         * The main array has 20 cards, so if you call this method for fist time 
         * the main array would be of 50 cards
         * 
         * Then everytime it will add 50 cards because the jikan API bring us 50 cards per call
        */
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

        /** This is a method that search for an specific anime
         * 
         */
      let apiUrl = 'https://api.jikan.moe/v3/search/anime?q='+ animeToSearch
      console.log(apiUrl)
      Axios.get(apiUrl)
          .then((info) => {
            let array = info.data.results
              setLista(array)
          })
          .catch((err) => {
              console.log(err)
          })
    }



    function getData(limit){
        /**This method is the first fill of the main array, it shows the quantity of cards that you choose (limit).  */
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
                        {lista.length != 0 && 
                            <div className="row d-flex justify-content-center ">
                                <button className="showMeMore" onClick={() => showmeMore()}>Show me more!</button>
                            </div>
                        }
                    </Route>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
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
