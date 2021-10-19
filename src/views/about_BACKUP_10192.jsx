import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/about.css';

export default function About(){

return(
  <div>
    <div className ="container">
      <div className="row d-flex justify-content-center border border-info">
        <div className="col-12 col-lg-7 align-self-center">


      		<h1 class="display-4 text-primary text-center">Leonardo Maidana</h1>


      		<p class="lead text-secondary m-2">
      			Hola, soy Leonardo, mucho gusto de conocerte! <br/><br/>

      			Tengo 24 años y soy un recién graduado de la carrera
      			de Analista Programador Universitario de una Facultad de Ingeniería
      			 en Argentina. Me encuentro constanstemente aprendiendo
      			nuevos lenguajes y usando nuevas tecnologías para poder ser un mejor
      			desarrollador y buscar nuevas oportunidades.
            <br/><br/>
      			Mi entendimiento del
      			inglés es bastante bueno, así que puedes comunicarte conmigo tanto en
      			español como en inglés.
      		</p>

          <div className="align-self-center d-flex justify-content-center " >
            <p className="text-justify contacts">
            GitHub: <a
              href="https://www.github.com/DevMaidanaLGM">@DevMaidanaLGM
              </a> <br/>
              Correo: <a
                href="dev.maidanalgm@gmail.com">Dev.MaidanaLGM@Gmail.com
                </a> <br/>
            </p>
          </div>

        </div>
        <div className="col-12 col-lg-5 d-flex justify-content-center">
          <img className="w-75 m-3 imgBorded imgLeon"src="./img/leonprofile.jpg" alt=""/>
        </div>
      </div>



      <div className="row d-flex justify-content-around border border-info">

<<<<<<< HEAD
      <div className="col-12 col-lg-5 d-flex justify-content-center">>
=======
      <div className="col-12 col-lg-5 d-flex justify-content-center">
>>>>>>> master
        <img className="w-75 m-3 imgBorded imgLeon"src="./img/leonprofile.jpg" alt=""/>
      </div>

        <div class="col-12 col-lg-7 align-self-center">


          <h1 class="display-4 text-primary">Leonardo Maidana</h1>


        		<p class="lead text-secondary me-2">
        			Hola, soy Leonardo, mucho gusto de conocerte!
              <br/><br/>
        			Tengo 24 años y soy un recién graduado de la carrera
        			de Analista Programador Universitario de una Facultad de Ingeniería
        			 en Argentina. Me encuentro constanstemente aprendiendo
        			nuevos lenguajes y usando nuevas tecnologías para poder ser un mejor
        			desarrollador y buscar nuevas oportunidades.
              <br/><br/>
        			Mi entendimiento del
        			inglés es bastante bueno, así que puedes comunicarte conmigo tanto en
        			español como en inglés.
        		</p>

            <div className="align-self-center d-flex justify-content-center " >
              <p className="text-justify contacts">
              GitHub: <a
                href="https://www.github.com/DevMaidanaLGM">@DevMaidanaLGM
                </a> <br/>
                Correo: <a
                  href="dev.maidanalgm@gmail.com">Dev.MaidanaLGM@Gmail.com
                  </a> <br/>
              </p>
            </div>

        </div>

      </div>

    </div>
  </div>
)

}
