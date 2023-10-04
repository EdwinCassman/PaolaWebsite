import React from 'react'

export default function TestimonialComments(props){
    
   return (
       <div className='testimony'>
        {!props.data.bg && <img  src={props.data.image} alt="" />}
            <div className='testimony-text'>
                <p className='cs-comment'>"{props.data.comment}"</p>
                <p className='cs-name'>- {props.data.name} -</p>
            </div>
            {props.data.bg && <img src={props.data.image} alt="" />}
       </div>
   )
}