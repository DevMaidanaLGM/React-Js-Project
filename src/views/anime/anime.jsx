import React, { useEffect,useState } from 'react';
import SideBar from '../partials/sideBar'
import { Link } from 'react-router-dom';
import './anime.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Anime({lista}){

    const [animes, setAnimes] = useState(lista);

    const [first, setFirst] = useState('');

    const [list, setList] = useState(lista);

    
    // const [key,setKey] = useState(false)
    
    function filterSidebar(key){
        setList(lista)
        if(key){
            setAnimes(lista.filter((e) => e.type == key))
            console.log(lista.filter((e) => e.type == key))
        }else{
            setAnimes(list)
        }
    }

    function sort(key){
        console.log('sort anime component',key)
        setList(lista)
        if(key){
            if(key == 'asc'){
                setAnimes(lista.sort())
                console.log(animes)

            }else{
                console.log('descendente')
                setAnimes(lista.reverse())
                console.log(animes)
            }
        }else{
            setAnimes(list)
        }
    }

    useEffect( () => {
        setAnimes(lista.sort())
        setFirst(lista[0])
        setList(lista)
    },[])


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
            <div className="w-100">
                <SideBar filterSidebar={filterSidebar} sort={sort} />
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
        )
    }
    
    
}