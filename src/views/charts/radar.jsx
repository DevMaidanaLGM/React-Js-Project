import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import Axios from 'axios';
import './radar.css';


export default function Chart({id}){

    const [puntos,setPuntos] = useState([])

    useEffect( () => {
        Axios.get('https://api.jikan.moe/v3/anime/'+id+'/stats')
        .then((info) => {
            let puntos = []
            let scores = info.data.scores
            let vot
            for( vot in scores ){
                puntos.push(scores[vot].votes)
            }
            setPuntos(puntos)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const data = {
        labels: ['Score 1', 'Score 2', 'Score 3', 'Score 4', 'Score 5', 'Score 6', 'Score 7', 'Score 8', 'Score 9', 'Score 10'],
        datasets: [
          {
            label: '# of Votes',
            data: puntos,
            backgroundColor: 'rgba(216, 2, 134,0.5)',
            borderColor: 'rgba(216, 2, 134,1)',
            borderWidth: 1,
          },
        ],
      };

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        scales: {
            r: {
                gridLines: {
                    color: 'rgba(255,255,255,1)'
                },
                angleLines: {
                    color: 'rgba(255,255,255,1)'
                },
                grid: {
                    color: 'rgba(255,255,255,1)',
                },
                beginAtZero: true
            },
        },
    }

    return (
        <div className="radar">
            <Radar data={data} options={options}/>
        </div>
    )
}

