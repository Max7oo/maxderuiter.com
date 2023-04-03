import '../styling/header.css'
import profile from '../media/max-laptop.jpg';

function Header() {
    return (
        <header id='header'>
            <div className='header-intro'>
                <h2 className='header-hidden'>I am Max de Ruiter</h2> 
                <h1>USER-CENTERED DESIGNER</h1>
                <h3>Available for work</h3>
            </div>
            <div className='header-profile'>
                <img src={profile} className='header-profile-image' alt='profile' />
            </div>    
        </header>
    );
  }
  
  export default Header;
  