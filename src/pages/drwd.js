import '../styling/work-item.css'

import Nav from '../components/nav';
import Footer from '../components/footer';

import drwd from '../media/drwd-mockup.jpg';
import drwd1 from '../media/drwd-services.jpg';
import drwd2 from '../media/drwd-mobile.jpg';
import arrow from '../media/arrow.svg';

function Drwd() {
  window.scrollTo(0,0);
    return (
      <div>
        <div className='bg'></div>
        <Nav />
        <header>
            <div className='work-intro'>
              <h4>drwd.nl</h4> 
              <h6>Portfolio website for my own company 'De Ruiter Webdevelopment'</h6>
              <div className='work-intro-tags'>
                <span>Market research</span>
                <span>Lo & Hi fidelity UI</span>
                <span>HTML, CSS & Javascript</span>
                <span>SEO</span>
              </div>
            </div>

            <div className='work-intro-visual'>
                <img src={drwd} className='work-intro-visual-img' alt='mock-up prototype' />
            </div>

            <div className='work-intro-tags-mobile'>
              <span>Market research</span>
              <span>Lo & Hi fidelity UI</span>
              <span>HTML, CSS & Javascript</span>
              <span>SEO</span>
            </div>   
        </header>

        <section id='project'>
          <div className='breadcrum-items'>
            <a href='#project' className='breadcrum-item'>
              <p>PROJECT</p>
              <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
            </a>
          </div>

          <div className='work-project'>
            <div className='work-project-info'>
              <h5>Research question</h5>
              <p>How can I use my prior work to create a website that attracts potential clients?</p>
              <h5>Target audience</h5>
              <p>Potential clients.</p>
              <h5>Value proposition</h5>
              <p>A place to show of my work to attract potential clients.</p>
            </div>
            <div>
              <img src={drwd1} className='work-project-img' alt='max holding maatje' />
            </div>
            <div className='work-project-context'>
            <h5>Context</h5>
              <p>Together with my brother I have been creating Wordpress websites for small- to medium sized companies for over 3 years. These websites mostly focus on providing information about the company and/or booking certain services.</p>
              <p>In order to show of our work we have created our own portfolio website that provides some information and links to the websites we have created. The portfolio website also provides information about us and our experiences/skills.</p>
              <p>Whenever a potential client is interested in working with us, they can contact us or fill out the contact form.</p>
            </div>
          </div>
        </section>

        <section id='product'>
          <div className='breadcrum-items'>
            <a href='#product' className='breadcrum-item'>
              <p>PRODUCT</p>
              <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
            </a>
          </div>

          <div className='work-product-delivar'>
            <div className='work-product-delivar-app'>
              <h5>Portfolio website</h5>
              <a className='button' href='https://www.drwd.nl' target={'_blank'} rel="noreferrer">View website</a>
              <p>Before I started to design the portfolio website my brother and I created a communication strategy to use in communication with our (potential) clients. In this strategy we wrote down our mission and vision and had a look what small- to medium size companies think is important in their websites.</p>
              <p>With this knowledge I was able to create a couple of hi fidelity designs, which we then turned into the website you see today. This website shows of our work and helps us to attract new clients.</p>
            </div>
            <div className='work-product-delivar-img'>
              <img src={drwd2} className='work-product-img' alt='website development' />
            </div>
          </div>
        </section>

        <section id='impact'>
          <div className='breadcrum-items'>
            <a href='#impact' className='breadcrum-item'>
              <p>IMPACT</p>
              <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
            </a>
          </div>

          <div className='work-impact'>
            <div className='work-impact-impact'>
              <h5>Impact of the project</h5>
              <p>Since the launch of our portfolio website we have been able to attract 6 new clients over 1.5 year. This has meant that I have been able to gain a lot of experience in webdevelopment next to my studies. Other than that I have gained a lot of experience in communication with clients (e.g. identifying and designing for their needs), leadership and business development.</p>
            </div>

            <div className='work-impact-learnings'>
              <h5>Key learnings</h5>
              <p>With the development of my own website, using HTML, CSS & Javascript, I learned how to go from setting a goal, doing research and creating the design to actually developing and using the website to attract new clients.</p>
              <p>I also got to use my own creativity to create a style for the website that I felt was right. It set a base for what I know I can do and motivates me to make more interesting designs in the future. As an interaction designer it is always important to find the balance between looks and usability, so to be able to experiment with my own websites (company and this portfolio) is something I enjoy doing a lot.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
export default Drwd;