import React from 'react'

export default function AllProjectsComp(props){
    

    const [currentIndex, setCurrentIndex] = React.useState(0)

        
    function nextProjectImage(){

        if(currentIndex === 3){
            setCurrentIndex(0)
        } else{
            setCurrentIndex(prev => prev +1)
        }
    }

    function previousProjectImage(){
        if(currentIndex === 0){
            setCurrentIndex(3)
        } else{
            setCurrentIndex(prev => prev -1)
        }
    }
       
    
    return (

        <div className='project'>
            <div className='wedding-project'>
          
                    <img id='border-img' src="/bordertop.jpg" alt="" />
               
                <p>{props.data.name}</p>
                <h4 style={{fontFamily: "cursive", margin: "-1rem 0 1rem 0"}}>{props.data.date}</h4>
                <img className='img' src={props.data.images[currentIndex]} alt="" />
                <div className='change-image-btns'>
                    <i onClick={previousProjectImage} className="fa-solid fa-angle-left"></i>
                    <i onClick={nextProjectImage} className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
   )
}