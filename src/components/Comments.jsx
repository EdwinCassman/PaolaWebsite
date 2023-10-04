import React from 'react'
import { commentsData } from '../commentsData'
export default function Comments(){

    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
        
        const intervalId = setInterval(() => {
            if(currentIndex === commentsData.length -1){
                setCurrentIndex(0)
            } else{
                setCurrentIndex(prev => prev +1)
            }
        }, 7000);

        return () => clearInterval(intervalId)
    }, )


   return (
       <div>
            <p className='cs-comment'>"{commentsData[currentIndex].comment}"</p>
            <p className='cs-name'>- {commentsData[currentIndex].name} -</p>
       </div>
   )
}