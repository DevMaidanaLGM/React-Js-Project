import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/about.css';
import Pdf from '../documents/cv_leon.pdf';
import { Github, EnvelopeFill } from 'react-bootstrap-icons';



export default function About(){

  function goTo(uri){
    window.open(uri,"_blank")
  }

return(
  <div>
    <div className ="container">
      <div className="row d-flex justify-content-center border border-info">
        <div className="col-12 col-lg-8 align-self-center">


      		<h1 class="display-4 text-primary text-center mt-2">Maidana Leonardo G.M.</h1>


      		<p class="lead text-secondary ms-2">
      			Hola, soy Leonardo, mucho gusto de conocerte! <br/><br/>

      			Tengo 24 años y soy un recién graduado de la carrera
      			de Analista Programador Universitario de una Facultad de Ingeniería
      			 en Argentina. Me encuentro constanstemente aprendiendo
      			y mejorando en las tecnologías de mí interés para poder ser un mejor
      			desarrollador y buscar nuevas oportunidades.
            <br/><br/>
      			Mi entendimiento del
      			inglés es bastante decente, así que puedes comunicarte conmigo
             tanto en	español como en inglés.<br/><br/>
           Si quieres saber más te dejo<a className="cvHere"
           href = {Pdf} target = "_blank"> aquí mi CV</a> donde puedes ver más
           ampliamente mi perfil profesional y las tecnologías que manejo.

      		</p>
          <div className="d-flex justify-content-center align-self-center my-3 mb-3" >
            <Github width="30px" height="30px" className="link" onClick={() => goTo('https://www.github.com/DevMaidanaLGM')} />
            <a onClick={() => goTo('https://www.github.com/DevMaidanaLGM')} className="ms-1 me-4">@DevMaidanaLGM</a>
            <EnvelopeFill width="30px" height="30px" className="link" onClick={() => goTo('mailto:dev.maidanalgm@gmail.com')} />
            <a onClick={() => goTo('mailto:dev.maidanalgm@gmail.com')} className="ms-1 me-4">dev.maidanalgm@gmail.com</a>
          </div>

        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center">
          <img className="w-100 h-80 align-self-center imgBorded imgLeon"src="./img/leonprofile.jpg" alt=""/>
        </div>
      </div>



      <div className="row d-flex justify-content-around border border-info">

      <div className="col-12 col-lg-4 d-flex justify-content-center">
        <img className="w-100 h-75 align-self-center  imgBorded imgPablo"src="./img/pabloprofile.jpg" alt=""/>
      </div>

        <div class="col-12 col-lg-8 align-self-center">


          <h1 class="display-4 text-primary  mt-2">García Pablo</h1>


        		<p class="lead text-secondary me-2">
                Hola que tal? Me llamo Pablo y me gustaria comentarte un
                poco acerca de mi
      <br/><br/>
                Actualmente estoy cursando el último año de la carrera de
                Analista Programador Universitario de la Facultad de Ingenieria de la UNJu
                Desde hace un año aproximadamente estoy trabajando como
                desarrollador freelance y cuento con varios proyectos
                realizados en diferentes
                tecnologías entre ellas Angular, PHP, NodeJS, Express,
                NestJS, Flutter, .NET, entre otras.
      <br/><br/>
                Me considero una persona sumamente paciente, con capacidad
                de rápido aprendizaje, que puede trabajar en equipo y dispuesta a ayudar.
      <br/>
                English isn't my strongest but I can understand and
                communicate. Almost all good tech docs are published
                in Englis so... It's very important
      <br/><br/>
                Te dejo mi Github y mi correo por si quieres comunicarte
                 conmigo. Espero te guste nuestro proyecto, nos vemos!
        		</p>

            <div className="d-flex justify-content-center align-self-center mb-3" >
              <Github width="30px" height="30px" className="link" onClick={() => goTo('https://www.github.com/pablogarcia77')} />
              <a onClick={() => goTo('https://www.github.com/DevMaidanaLGM')} className="ms-1 me-4">@pablogarcia77</a>
              <EnvelopeFill width="30px" height="30px" className="link" onClick={() => goTo('mailto:pablogarcia77@hotmail.com.ar')} />
              <a onClick={() => goTo('https://www.github.com/DevMaidanaLGM')} className="ms-1 me-4">pablogarcia77@hotmail.com.ar</a>
            </div>
        </div>

      </div>

    </div>
  </div>
)

}
