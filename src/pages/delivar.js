import '../styling/work-item.css'

import Nav from '../components/nav';
import Footer from '../components/footer';

import delivar from '../media/delivar-mockup.jpg';
import delivar1 from '../media/delivar-progress.jpg';
import arrow from '../media/arrow.svg';

function Delivar() {
  window.scrollTo(0,0);
    return (
      <div>
        <div className='bg'></div>
        <Nav />
        <header>
            <div className='work-intro'>
              <h4>Delivar</h4> 
              <h6>Receiving packages without staying at home</h6>
              <div className='work-intro-tags'>
                <span>Design thinking</span>
                <span>Lo & Hi fidelity UI</span>
                <span>A/B testing</span>
                <span>Usability testing</span>
              </div>
            </div>

            <div className='work-intro-visual'>
                <img src={delivar} className='work-intro-visual-img' alt='mock-up prototype' />
            </div>

            <div className='work-intro-tags-mobile'>
              <span>Design thinking</span>
              <span>Lo & Hi fidelity UI</span>
              <span>A/B testing</span>
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
              <p>How can an app make the delivery of parcels in an IoT parcel box easy and userfriendly with the aim to optimalize the customer journey?</p>
              <h5>Target audience</h5>
              <p>Receivers of parcels.</p>
              <h5>Value proposition</h5>
              <p>Increasing the successrate of parcel delivery.</p>
            </div>
            <div className='flex'>
              <img src={delivar1} className='work-project-img' alt='app development' />
            </div>
            <div className='work-project-context'>
            <h5>Context</h5>
              <p>Companies in the package delivery sector (i.e. DHL) are trying to optimise their logistics as good as possible. Sadly, even perfection from the delivery company would not be good enough, as the last mile is always dependent on the receiver of the parcel. If the receiver is not at home to receive the parcel, the efficiency of the logistics is greatly reduced, as the parcel has to be delivered elsewhere.</p>
              <p>Delivar tries to solve this problem by developing an IoT parcel box which can be controlled via an app. During my graduation project for CMD, I designed this app as an interaction designer, designing the user flow and developing several concepts to incorporate in the app. The result is an app that, in combination with the IoT parcel box, can greatly improve the succes of delivery.</p>
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
              <h5>App prototype</h5>
              <a className='button' href='https://majs2e.axshare.com' target={'_blank'} rel="noreferrer">View prototype</a>
              <p>Delivar did only have an idea of what the app should be, but did not have any designs ready. Therefor it was my job to turn their idea into a concept, by gathering the needs of various stakeholders and researching theories, like gamification, to incorporate in the app' design.</p>
              <p>By using design thinking in this proces I was able to ideate, concept and test a couple of different features. The main feature was the opening and closing of the parcel box, by either swiping the lid of the parcel box or using an (iPhone like) slider in the app.</p>
              <p>Another important feature is the gathering of environment points (milieupunten in Dutch). Talking to parcel delivery services like DHL and PostNL made me realise that the main problem for their delivery optimization is the 'last mile' of the parcel. Delivery of the parcel cannot happen when the receiver is not there to receive the parcel, even when the delivery side is perfectly optimized.</p>
              <p>The app and parcel box will take this problem partially away, but users will still need to open it in the app when the deliveryman arrives. The environment points will help to motivate the users to open the parcel box on time, by rewarding the user with the points when the delivery is successful on the first try. Users will be able to spent these points on various environmental friendly options, like planting a tree.</p>
              <p>The last important feature is the management of the parcels. Using APIs from DHL, PostNL and the like, the app is able to import incoming parcels, which makes it possible for the user to read information and be notified about the parcels' arrival.</p>
            </div>
            <div className='work-product-delivar-img'>
              <iframe title="Uitleg Delivar app" src="https://www.youtube.com/embed/5CR0Cxu7G2g" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
              <p>Testing this prototype showed that users experience the app as user-friendly as 95% of tasks tested were completed first try (in the final evaluation). Users and other stakeholders also provided very positive feedback on the developed features of the app.</p>
              <p>This proves the promising impact of the app on the success rate of parcel delivery, all the while making the life of the user easier  and promoting environmental friendly solutions. Unfortunately the app is, as of now, not in production because of lack of funds.</p>
            </div> 

            <div className='work-impact-learnings'>
              <h5>Key learnings</h5>
              <p>During this project I was able to follow the entire cycle of Design Thinking, going back and forth between some to incorporate feedback of stakeholders. This has been a good practice, as I now have experience with various methods for every step of the Design Thinking method.</p>
              <p>I am very happy with the features and I hope the prototype will be put to good use. I am particularly happy that I was able to learn about and use the gamification theory in my design.</p>
              <p>In order to incorporate this in the design, using the environmental points as an example, I used the prototyping tool Axure, as it allows to use logical functions. The logical functions make it possible to save variables and use them on different pages and/or in calculations.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
export default Delivar;