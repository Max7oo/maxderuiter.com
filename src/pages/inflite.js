import '../styling/work-item.css'

import Nav from '../components/nav';
import Footer from '../components/footer';

import profile from '../media/ski-plane.jpg';
import inflite from '../media/inflite-mockup.jpg';
import inflite1 from '../media/inflite-progress.jpg';
import arrow from '../media/arrow.svg';

function Inflite() {
  window.scrollTo(0,0);
    return (
      <div>
        <div className='bg'></div>
        <Nav />
        <header>
            <div className='work-intro'>
              <h4>inflite.nz</h4> 
              <h6>New website for New Zealand's largest private air travel company</h6>
              <div className='work-intro-tags'>
                <span>SCRUM</span>
                <span>Design cycle</span>
                <span>Lo & Hi fidelity UI</span>
                <span>Wordpress</span>
                <span>SEO</span>
                <span>Usability testing</span>
              </div>
            </div>

            <div className='work-intro-visual'>
                <img src={inflite} className='work-intro-visual-img' alt='mock-up prototype' />
            </div>

            <div className='work-intro-tags-mobile'>
              <span>SCRUM</span>
              <span>Design cycle</span>
              <span>Lo & Hi fidelity UI</span>
              <span>Wordpress</span>
              <span>SEO</span>
              <span>Usability testing</span>
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
              <p>How can the outdated website be improved to target the latest trends in tourism?</p>
              <h5>Target audience</h5>
              <p>Adventure seeking tourists in New Zealand.</p>
              <h5>Value proposition</h5>
              <p>By focussing on the latest trends in tourism the website aims to attract new customers.</p>
            </div>
            <div>
              <img src={profile} className='work-project-img' alt='max holding maatje' />
            </div>
            <div className='work-project-context'>
            <h5>Context</h5>
              <p>In the third year of my study I was able to do an internship at INFLITE in New Zealand. INFLITE is a tourism group that holds brands that provide air travel and aviation solutions. This means private jets, helicopter trips to have lunch on remote islands, skydiving or landing with a ski plane on a glacier (among many activities).</p>
              <p>During my internship I was lucky enough to be able to experience many of these activities, but I also worked on the new INFLITE website, together with the marketing team. During this project I was given a lot of freedom to develop my ideas into reality, using the design cycle and the expertise of my colleagues.</p>
              <p>I am very proud of my contribution to the final product and the time I have had in New Zealand.</p>
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
              <h5>Finished website</h5>
              <a className='button' href='https://www.inflite.nz' target={'_blank'} rel="noreferrer">View website</a>
              <p>When I arrived at INFLITE, my colleagues from the marketing team, already had a set of requirements that the new website would need to meet. Requirements like: the website needs to show what an INFLITE experience is about; -needs to fit the brand style; -show packages on offer; -generate leads; and show off the wide range of brands inside of the INFLITE Tourism Group.</p>
              <p>In order to meet these requirements I started talking to the various stakeholders in order to find out what the problems are that lead to these requirements. The three major problems I found were: the website is outdated, information is wrong and user interactions are annoying/do not work.</p>
              <p>To tackle these problems I have created a design that gives the customer a quick overview of all the INFLITE experiences. With this overview the customer can make a decision which experience they would like to know more about. When clicked on one of the experiences the customer gets to know more about- and is informed about the packages available for the experience.</p>
              <p>If the customer is happy with one of the packages they can book it through the new funnel I created. In this funnel I have also made it easy to make special requests, as a lot of the experiences focus on the high-end market. Besides that, customers can also contact the helpdesk for further questions.</p>
            </div>
            <div className='work-product-delivar-img'>
              <img src={inflite1} className='work-product-img' alt='website development' />
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
              <p>During my time working on this project I was able to complete the entire website together with my colleagues. Unfortunately, around the time of the launch of the website, the C disease happend, which meant tourism completely died in New Zealand.</p>
              <p>However, till this day the website, as developed by me, is still being used (besides minor changes) and gets around 5000-6000 viewers per month through organic search. These viewers generate a revenue between 5 and 6 million dollars per year.</p>
            </div>

            <div className='work-impact-learnings'>
              <h5>Key learnings</h5>
              <p>The most important key learning that I can take away from this project is creating a large website for a corporate company. This meant that I had to attend meetings, work together with my colleagues (Scrum) and had to explain decisions to my higher ups (not always digitally skilled).</p>
              <p>During the creation of the website I learned a lot about webdesign, sales funnels and SEO from my colleagues. While learning about these subjects I also had to live in a completely new country with a new culture, on the other side of the world. This meant that I was also able to improve my English during the 6 months I have lived there.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
export default Inflite;