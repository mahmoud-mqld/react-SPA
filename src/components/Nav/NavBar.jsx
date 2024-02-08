import { Component, useState , useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar () {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
    return (
      <>
        <nav className={ isScrolled ? 'scrolled fixed-top navbar navbar-expand-lg' : 'fixed-top navbar navbar-expand-lg'}>
          <div className="container">
            <Link className="navbar-brand " to={"home"}>
              Start Frame Work
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"> <i class="fa-solid fa-bars"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className={(a)=> a.isActive ? 'activate nav-link' : 'nav-link'} to={"about"}>About </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={(a)=> a.isActive ? 'activate nav-link' : 'nav-link'} to={"portofolio"}>Portofolio </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={(a)=> a.isActive ? 'activate nav-link' : 'nav-link'} to={"contact"}>Contact </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

