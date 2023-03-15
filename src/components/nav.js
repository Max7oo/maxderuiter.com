// import { Link } from "react-router-dom";

import '../styling/nav.css';

function Nav() {
  return (
    <section id='top'>
      <div className='nav-bar'>
        <a href="/">
          MAX DE RUITER
        </a>

        {/* <button className='nav-toggle-mobile' aria-controls='nav' aria-expanded="false">MENU</button>
      
        <nav>
          <ul id='nav' data-visible='false' className='nav'>
            <li className='active'>
              <a href="./#work">
                WORK
              </a>
            </li>
            <li className='active'>
              <a href="/#about">
                ABOUT ME
              </a>
            </li>
            <li className='active'>
              <Link to="/blog">
                BLOG
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </section>
  );
}

export default Nav;