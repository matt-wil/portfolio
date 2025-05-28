import { navLinks } from "../constants"
import { useState, useEffect } from "react"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className='inner'></div>
        <a className='logo' href="#hero">
            Matt | Williams
        </a>
        <nav className='desktop'>
            <ul>
                {navLinks.map(({link, name}) => (
                    <li key={name} className="group">
                        <a href={link}>
                            <span>{name}</span>
                            <span className="underline"/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        <a href="#contact" className='contact-btn group'>
            <div className='inner'>
                <span>Contact me</span>
            </div>
        </a>
    </header>
  )
}

export default NavBar