import '../styling/footer.css'

import arrow from '../media/arrow.svg';

function Footer() {
    return (
        <footer>
            <div className='footer-items-back-to-top'>
                <a href='#top' className='footer-items-back-to-top-link'>
                    <p>BACK TO TOP</p>
                    <img src={arrow} className='footer-items-back-to-top-link-arrow' alt='arrow up'/>
                </a>
            </div>
            <div className='footer-items-website'>
                <p>NEED A WEBSITE? CONTACT ME OR GO TO <a href='https://www.drwd.nl/' target={'_blank'} rel="noreferrer">DRWD.NL</a></p>
            </div>
            <div className='footer-items-copy'>
                <p>©2023 BY MAX DE RUITER</p>
            </div>
        </footer>
    );
  }
  
  export default Footer;