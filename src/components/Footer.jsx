import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Footer.css"

export default function Footer(props){

   return (
       <div className='footer'>
            <div className='footer-top'>
                <img id='logo' src="/plogo.jpg" alt="" />
                <div className='footer-top-text'>
                    <p style={{fontSize: "1.5rem", color: "#826a4b", fontWeight: "300"}}>PAOLA PUERTA</p>
                    <p style={{fontSize: "1.25rem", color: "#AD5E35", fontWeight: "200"}}>Productora de bodas | Catering</p>
                    <p id='underline-footer'></p>
                </div>
            </div>
            <div className='footer-icons'>
                <p><i className="fa-brands fa-whatsapp fa-icon"></i> +51 963 356 362</p>
                <p><i className="fa-regular fa-envelope fa-icon"></i> paolapuertaplanner@gmail.com</p>
                <div>
                    <i className="fa-brands fa-tiktok fa-icon"></i>
                    <i className="fa-brands fa-instagram fa-icon"></i>
                    <i className="fa-brands fa-facebook-f fa-icon"></i>
                    <span> paolapuertaplanner</span>
                </div>
            </div>
       </div>
   )
}