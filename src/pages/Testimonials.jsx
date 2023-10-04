import React from 'react'
import "../styles/Testimonials.css"
import { commentsData } from '../commentsData'
import TestimonialComments from '../components/TestimonialComments'

export default function Testimonials(){

    const commentsElement = commentsData.map(comment => {
        return <TestimonialComments key={comment.name} data={comment}/>
    })

   return (
       <div className='testimonials'>
            {commentsElement}
       </div>
   )
}