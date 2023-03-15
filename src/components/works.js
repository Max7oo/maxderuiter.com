import { Link } from "react-router-dom";

import '../styling/works.css'

import arrow from '../media/arrow.svg';
import maatje from '../media/maatje-mockup.jpg';
import delivar from '../media/delivar-mockup.jpg';
import inflite from '../media/inflite-mockup.jpg';
import drwd from '../media/drwd-mockup.jpg';

function Works() {
    return (
        <section id='work'>
            <div className='breadcrum-items'>
                <a href='#work' className='breadcrum-item'>
                    <p>SELECTED WORKS</p>
                    <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
                </a>
            </div>
            
            <div className='work'>
                <div className='work-thumbnail hover-hidden'>
                    <img src={maatje} className='work-thumbnail-image' alt='zorgrobot maatje'/>
                </div>
                
                <div className='work-items'>
                    <Link to="/maatje">
                        <div className='work-item-1'>
                            <div className='work-item-image desktop-hidden'>
                                <img src={maatje} className='work-item-image' alt='zorgrobot maatje'/>
                            </div>
                            <div className='work-item-description mobile-hidden'>
                                <h2>Maatje</h2>
                                <p>Research, development and evaluation of a technology adoption plan.</p>
                            </div>
                            <div className='work-item-tags'>
                                <ul>
                                    <li>Research</li>
                                    <li>UX&UI</li>
                                    <li>Python</li>
                                    <li>Adoption</li>
                                    <li>/2023</li>
                                </ul>
                                <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                            </div>
                        </div>
                    </Link>

                    <Link to="/delivar">
                        <div className='work-item-2'>
                            <div className='work-item-image desktop-hidden'>
                                <img src={delivar} className='work-item-image' alt='delivar app'/>
                            </div>
                            <div className='work-item-description mobile-hidden'>
                                <h2>Delivar</h2>
                                <p>Research and design of features (UX&UI), development of prototype.</p>
                            </div>
                            <div className='work-item-tags'>
                                <ul>
                                    <li>Research</li>
                                    <li>UX&UI</li>
                                    <li>App</li>
                                    <li>/2021</li>
                                </ul>
                                <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                            </div>
                        </div>
                    </Link>

                    <Link to="/inflite">
                        <div className='work-item-3'>
                            <div className='work-item-image desktop-hidden'>
                                <img src={inflite} className='work-item-image' alt='zorgrobot maatje'/>
                            </div>
                            <div className='work-item-description mobile-hidden'>
                                <h2>inflite.nz</h2>
                                <p>Created a new UX/UI design and developed it into a website.</p>
                            </div>
                            <div className='work-item-tags'>
                                <ul>
                                    <li>Front-end</li>
                                    <li>UX&UI</li>
                                    <li>Website</li>
                                    <li>/2020</li>
                                </ul>
                                <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                            </div>
                        </div>
                    </Link>

                    <Link to="/drwd">
                        <div className='work-item-4'>
                            <div className='work-item-image desktop-hidden'>
                                <img src={drwd} className='work-item-image' alt='zorgrobot maatje'/>
                            </div>
                            <div className='work-item-description mobile-hidden'>
                                <h2>drwd.nl</h2>
                                <p>Design and development of portfolio website (Co-owner).</p>
                            </div>
                            <div className='work-item-tags'>
                                <ul>
                                    <li>Front-end</li>
                                    <li>UX&UI</li>
                                    <li>Website</li>
                                    <li>/2020</li>
                                </ul>
                                <img src={arrow} className='work-item-tags-arrow' alt='arrow down'/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
  }
  
  export default Works;