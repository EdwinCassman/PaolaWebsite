import React from 'react'
import Projects from '../components/Projects'
import "../styles/Home.css"
import { ProjectData } from '../ProjectData'
import { Link } from 'react-router-dom'


import ImageRolling from '../components/ImageRolling'
import Comments from '../components/Comments'

export default function Home(props){

    
    const projectDataElement = ProjectData.map(project => {
        return <Projects key={project.id} data={project}/>
    })

    


    return (
       <div>
            <ImageRolling/>
            <section className='get-to-know-us'>
                <div className='gtku-image'>
                    <img src="/Deborah+-191.jpg" alt="" />
                </div>
                <div className='gtku-text'>
                    <div className='gtku-underline'></div>
                    <h2>Ustedes son lo más importante</h2>
                    <p>Nos mueve la pasión por las bodas, pero sobre todo, ayudar a dos personas que se eligieron para siempre.
                        Los acompañaremos en este camino de la manera más personalizada posible, y con todo el amor del mundo.
                    </p>
                    <button>CONÓCENOS</button>
                </div>
            </section>
            <section className='quote'>
                <i className="fa-solid fa-quote-right"></i>
                <p style={{fontStyle: "italic"}}><strong>{props.lan ? "'Every wedding should be personal and unique'" : "'Cada boda debe sentirse personal y única.'"}</strong> </p>
                <p>
                    {props.lan ? 
                        "Through creative designs, and eye for design & timing, as well as a feeling for the tiny details. Those are my key ingredients to give my clients a personal and unique wedding. Months of planning will result in a unforgetable day - where you as wedding couple get the most important experience - Love for each other." : 
                        "A través de ideas creativas, un ojo para el diseño y la sincronización, así como una atención a los pequeños detalles, mi ambición es que cada boda se sienta personal y única. Meses de planificación deben dar como resultado un día inolvidable, donde ustedes, como pareja de novios, puedan disfrutar plenamente y experimentar lo más importante de todo - el amor mutuo."}</p>
                <p style={{fontStyle: "italic"}}><strong>- Paola Puerta -</strong></p>
            </section>

            <section className='about-home'>
                <div>
                    <p>{props.lan ? "INTEGRITY, STYLE AND FEELING" : "INTEGRIDAD, ESTILO Y SENSIBILIDAD."}</p>
                    <h4>{props.lan ? "Wedding planner Paola Puerta offers tailored wedding coordination with integrity, style and feeling. We assist Peruvian and American bridal couples in arranging their weddings in Peru and the U.S. As your wedding coordinator, we guide you through the entire planning process, all the way to the honeymoon. Your wedding is planned with care and precision, resulting in an intimate, warm and completely unforgettable day." : 
                        "Paola Puerta Event Planner ofrece coordinación de bodas a medida con integridad, estilo y sensibilidad. Ayudamos a parejas peruanos e internacionales a organizar sus bodas en Peru y Estados Unidos. Como su coordinador de bodas, les guiamos a lo largo de todo el proceso de planificación hasta el viaje de bodas. Su boda se planifica con atención y precisión, y el resultado es un día íntimo, cálido y completamente inolvidable."} 
                    </h4>
                </div>
                <img width={"100%"} src="/HayinAlex1.jpg" alt="" />
            </section>

            <section className='projects'>
                <h2>{props.lan ? "PROJECTS" : "ÚLTIMOS PROYECTOS"}</h2>
                <div className='underline'></div>
                <div className='project-div'>
                    {projectDataElement}
                </div>
                    <Link  style={{color: "#646464", textDecoration: "none"}} to="/all-projects"><p className='vermas'>VER MÁS</p></Link>
            </section>
            
            <section className='comment-section'>
                <Comments />
            </section>

            <section className='follow-us'>
                <p>{props.lan ? "FOLLOW US ON INSTAGRAM" : "SÍGUENOS EN INSTAGRAM"}</p>
                <div className='insta-imgs'>
                    <a href="https://www.instagram.com/paolapuerta_wp/"><img src="/insta1.png" alt="" /></a>
                    <a href="https://www.instagram.com/paolapuerta_wp/"><img src="/insta2.png" alt="" /></a>
                    <a href="https://www.instagram.com/paolapuerta_wp/"><img src="/insta3.png" alt="" /></a>
                    <a href="https://www.instagram.com/paolapuerta_wp/"><img src="/insta4.png" alt="" /></a>
                </div>
            </section>
       </div>
   )
}   