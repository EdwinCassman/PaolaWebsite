import React from 'react'
import "../styles/AboutMe.css"

export default function AboutMe(props){

   return (
       <div className='about-me'>
            <div className='about-me-image'>
                <img src="/PaolaAbout2.jpeg" alt="" />
            </div>
            <div className='about-me-text'>
                <h2>Paola Puerta</h2>
                <div className='about-me-underline'></div>
                <h5>
                    Wedding & Event Planner
                </h5>
                <p> {props.lan ? 
                    "Hello, I am Paola Puerta, Wedding & Event Planner with years of experience designing dream weddings. Our mission is to always find the best suppliers, in the shortest time, and, most importantly, work within your budget." :
                     "Hola, soy Paola Puerta Wedding & Event Planner que tiene años de experiencia diseñando bodas soñadas. Nuestra misión es encontrar siempre los mejores proveedores, al menor tiempo y principalmente, trabajar bajo tu presupuesto. "}
                    
                </p>
                <br />
                <p> {props.lan ? 
                    "We create exceptional experiences that reflect the unique essence of each couple, from planning to flawless coordination on the day of the event. My goal is for my couples to enjoy the process, and together, we can bring to life all the ideas they have in mind." :
                    "Creamos experiencias excepcionales que reflejan la esencia única de cada pareja, desde la planificación hasta la coordinación impecable del día del evento. Mi meta es que mis novios disfruten el proceso y que juntos podamos darle forma a todas las ideas que tienen en mente. "}
                    
                </p>
                <br />
                <p> {props.lan ? 
                    "We are ready to answer your questions and guide you on this beautiful journey. Dreams do come true, and I can help you. We will make your wedding better than you ever dreamed." : 
                    "Estamos listos para resolver tus dudas y guiarte en este hermoso camino. Los sueños si se cumplen, y yo te puedo ayudar. Conseguiremos que tu boda sea mejor de lo que jamás soñaste."}
                    
                </p>
            </div>
       </div>
   )
}