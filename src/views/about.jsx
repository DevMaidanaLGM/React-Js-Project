import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/about.css';
import Pdf from '../documents/cv_leon.pdf';
export default function About(){

return(
  <div>
    <div className ="container">
      <div className="row d-flex justify-content-center border border-info">
        <div className="col-12 col-lg-7 align-self-center">


      		<h1 class="display-4 text-primary text-center">Maidana Leonardo G.M.</h1>


      		<p class="lead text-secondary m-2">
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
           <br/><br/>
      		</p>
          <div className="align-self-center" >
            <p className="text-justify">
            GitHub: <a
              href="https://www.github.com/DevMaidanaLGM">@DevMaidanaLGM
              </a> <br/>
              Correo: <a
                href="contact">Dev.MaidanaLGM@Gmail.com
                </a> <br/>
            </p>
          </div>

        </div>
        <div className="col-12 col-lg-5 d-flex justify-content-center">
          <img className="w-75 h-80 align-self-center imgBorded imgLeon"src="./img/leonprofile.jpg" alt=""/>
        </div>
      </div>



      <div className="row d-flex justify-content-around border border-info">

      <div className="col-12 col-lg-5 d-flex justify-content-center">
        <img className="w-100 h-75 align-self-center  imgBorded imgPablo"src="./img/pabloprofile.jpg" alt=""/>
      </div>

        <div class="col-12 col-lg-7 align-self-center">


          <h1 class="display-4 text-primary">García Pablo</h1>


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
      <br/>
                Te dejo mi Github y mi correo por si quieres comunicarte
                 conmigo. Espero te guste nuestro proyecto, nos vemos!
        		</p>

            <div className="d-flex justify-content-center align-self-center" >
              <p className="text-justify contacts">
              GitHub: <a
                href="https://github.com/pablogarcia77">@pablogarcia77
                </a> <br/>
                Correo: <a
                  href="contact">pablogarcia77@gmail.com
                  </a> <br/>
              </p>
            </div>
        </div>

      </div>

    </div>
  </div>
)

}
