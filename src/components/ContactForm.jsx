import {useRef} from 'react'
import "../styles/ContactForm.css"

export default function ContactForm(props){

    const form = useRef()

    function sendEmail(){
        
    }

   return (
       <section>
            <div className="container">
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div>
                        <input type="text" placeholder={props.lan ? "Full Name" : "Nombre Completo"} name='user_name' required/>
                        <input type="email" placeholder='Email' name='user_email' required/>
                        <input type="text" placeholder={props.lan ? "Subject" : "Sujeto"} name='subject' required/>
                    </div>
                    <div>
                        <textarea name="message" placeholder={props.lan ? "Message" : "Mensaje"} cols="30" rows="11"></textarea>
                        <button type='submit'>{props.lan ? "Send Message" : "Enviar Mensaje"}</button>
                    </div>
                </form>
            </div>
       </section>
   )
}