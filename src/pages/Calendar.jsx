import React from 'react'
import "../styles/Calendar.css"
import { InlineWidget } from 'react-calendly'

export default function Calendar(){
    const [showWhatsApp, setShowWhatsApp] = React.useState(false)

    setTimeout(() => {
        setShowWhatsApp(true)
    }, 2000);

   return (
       <div className='schedule'>
            <InlineWidget styles={{height: "150vh"}} url='https://calendly.com/paolapuertaplanner/asesorate-conmigo?back=1&month=2023-09' />
            { showWhatsApp && <div className='calendar-top'>
                <a href='https://wa.me/+51963356362' className='whatsapp-button'><i class="fa-brands fa-whatsapp fa-icon"></i></a>
            </div>}
       </div>
   )
}