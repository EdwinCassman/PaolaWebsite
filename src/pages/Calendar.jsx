import React from 'react'
import "../styles/Calendar.css"
import { InlineWidget } from 'react-calendly'

export default function Calendar(){


   return (
       <div className='schedule'>
            <InlineWidget styles={{height: "150vh"}} url='https://calendly.com/paolapuertaplanner/asesorate-conmigo?back=1&month=2023-09' />
          
       </div>
   )
}