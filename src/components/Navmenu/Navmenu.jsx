import React from 'react';
import { useState } from 'react';
import './Navmenu.css';

const Navmenu = () => {
  
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
      const icon = document.querySelector('.icon');
      const modalMenu = document.querySelector('.modal-menu');
      const modaltext = document.querySelectorAll('.navitem')
      icon.classList.toggle("open");
      icon.classList.toggle("indexZ");
      if (menuOpen) {
        modalMenu.classList.add("hidemenu");
        modalMenu.classList.remove("showmenu");
      } else {
        modalMenu.classList.add("showmenu", "slide-in-blurred-top");
        modaltext.forEach (item => {  
              item.classList.add("tracking-in-expand");
            });
        modalMenu.classList.remove("hidemenu");
      }
      setMenuOpen(!menuOpen);
    }
    
    return (
        <>
        <header>
            <ul className='navmenu'>
                <a href="#">Homepage</a>
                <a href="#">About me</a>
                <a href="#">My Work</a>
                <a href="#">Contact</a>
            </ul>
            <div className="icon nav-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='modal-menu hidemenu'>
                <ul className='modal-menu-list'>
                    <a className="navitem" href="#">Homepage</a>
                    <a className="navitem" href="#">About me</a>
                    <a className="navitem" href="#">My Work</a>
                    <a className="navitem" href="#">Contact</a>
                </ul>
            </div>
        </header>
        </>
    );
};

export default Navmenu;