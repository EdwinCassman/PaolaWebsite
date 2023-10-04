import React from 'react'
const mainPics = ["/SCT-103.jpg", "/SCT-110.jpg", "/SCT-115.jpg", "/SCT-117.jpg", "/SCT-142.jpg", "/SCT-147.jpg", "/SCT-98.jpg","/SCT-361.jpg","/SCT-174.jpg",]


export default function ImageRolling(){
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
        
        const intervalId = setInterval(() => {
            if(currentIndex === mainPics.length -1){
                setCurrentIndex(0)
            } else{
                setCurrentIndex(prev => prev +1)
            }
        }, 3000);

        return () => clearInterval(intervalId)
    }, )

   return (
       <div>
            <img className='main-image' width={"100%"} src={mainPics[currentIndex]} alt="" />
       </div>
   )
}