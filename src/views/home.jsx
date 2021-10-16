import React from 'react';
import NavBar from './partials/navBar';
import SideBar from './partials/sideBar';
import Footer from './partials/footer';
import Anime from './anime/anime';

export default function Home(){

    return (
        <>
            <NavBar />
            <SideBar />
            <Anime />
            <Footer />
        </>
    )
}