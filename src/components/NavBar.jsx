import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavBar.css"

export default function NavBar(props){

    const [showNavLinks, setShowNavLinks] = React.useState(false)
    const [width, setWidth] = React.useState(window.innerWidth)

    function toggleMobileNav(){
        setShowNavLinks(prev => !prev)
    }

    let linkStyles = {
        display: showNavLinks ? "flex" : "none",
        flexDirection: "column",
        position: "absolute",
        backgroundColor: "white",
        width: "100%",
        top: "6.9rem",
        left: "0",
        padding: "2rem 1rem",
        borderTop: "1px solid white"

    }

    let normalStyles = {
        margin: "auto 0",
        display: "flex",
        justifyContent: "space-between",
        width: "450px"
    }
    

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setShowNavLinks(false)
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
       <div className='navbar'>
            <Link onClick={toggleMobileNav} className='link' to="/"><img className='logo' src="/pplogo.png" alt="" /></Link>

            <div style={ width < 1025 ? linkStyles : normalStyles} className='links'>
                <Link onClick={toggleMobileNav} className='link' to="/about-me">{props.lan ? "ABOUT ME" : "ACERCA DE MÍ"}</Link>
                <Link onClick={toggleMobileNav} className='link' to="/calendar">{props.lan ? "SCHEDULE WITH ME" : "AGENDA CONMIGO"}</Link>
                <Link onClick={toggleMobileNav} className='link' to="/testimonials" >{props.lan ? "TESTIMONIALS" : "TESTIMONIOS"}</Link>
                <button onClick={props.changeLan}><strong>{props.lan ? "ES" : "EN"}</strong></button>
            </div>

            {width < 1025 && 
                <div>
                    {!showNavLinks && <i onClick={toggleMobileNav} className="fa-solid fa-bars-staggered"></i>}
                    {showNavLinks && <i onClick={toggleMobileNav} className="fa-solid fa-x"></i>}
                </div>
            }
       </div>
   )
}