import '../styling/work-item.css'

import Nav from '../components/nav';
import Footer from '../components/footer';

function Blog() {
  window.scrollTo(0,0);
    return (
      <div>
        <div className='bg'></div>
        <Nav />
        <header>
            <div className='work-intro'>
                <h4>Blog</h4> 
                <h6>Coming soon</h6>
            </div>
        </header>
        <Footer />
      </div>
    );
  }
  
export default Blog;