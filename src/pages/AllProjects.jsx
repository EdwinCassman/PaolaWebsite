import React from 'react'
import { allProjectData } from '../allProjectData'
import AllProjectsComp from '../components/AllProjectsComp'

export default function AllProjects(props){

    const allProjectDataElement = allProjectData.map(project => {
        return <AllProjectsComp key={project.id} data={project}/>
    })
    
    return (

        <section className='projects'>
            <h2>{props.lan ? "ALL PROJECTS" : "TODOS LOS PROYECTOS"}</h2>
            <div className='underline'></div>
            <div className='project-div'>
                {allProjectDataElement}
            </div>
         </section>
   )
}