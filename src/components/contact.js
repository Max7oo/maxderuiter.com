import '../styling/contact.css'

import arrow from '../media/arrow.svg';
import cv from '../media/CV-eng-MaxdeRuiter.pdf';

function Contact() {
    return (
        <section id='contact'>
            <div className='breadcrum-items'>
                <a href='#contact' className='breadcrum-item'>
                    <p>CONTACT ME</p>
                    <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
                </a>
            </div>

            <div className='contact'>
                <a href={cv} download='CV Max de Ruiter' className='contact-arrow'><span>Resume.pdf<img src={arrow} className='contact-arrow-1' alt='arrow up'/></span></a>
                <a href='mailto:m.j.deruiter99@hotmail.com' className='contact-arrow'><span>Mail me<img src={arrow} className='contact-arrow-2' alt='arrow up'/></span></a>
                <a href='https://www.instagram.com/maxoo.nl/' className='contact-arrow'><span>Instagram<img src={arrow} className='contact-arrow-3' alt='arrow up'/></span></a>
                <a href='https://www.linkedin.com/in/max-de-ruiter-2a8871181/' className='contact-arrow'><span className='contact-last'>LinkedIn<img src={arrow} className='contact-arrow-4' alt='arrow up'/></span></a>
            </div>
        </section>
    );
  }
  
  export default Contact;