import '../styling/work-item.css'

import Nav from '../components/nav';
import Footer from '../components/footer';

import profile from '../media/max-maatje.jpg';
import maatje from '../media/maatje-mockup.jpg';
import arrow from '../media/arrow.svg';
import greenarrow from '../media/arrow-green.svg';

function Maatje() {
  window.scrollTo(0,0);
    return (
      <div>
        <div className='bg'></div>
        <Nav />
        <header>
            <div className='work-intro'>
              <h4>Maatje</h4> 
              <h6>Improving the adoption of healthcare robot Maatje</h6>
              <div className='work-intro-tags'>
                <span>NASSS-framework</span>
                <span>Prototype</span>
                <span>Lo & Hi fidelity UI</span>
                <span>Pilot</span>
                <span>Usability testing</span>
              </div>
            </div>

            <div className='work-intro-visual'>
                <img src={maatje} className='work-intro-visual-img' alt='mock-up prototype' />
            </div>

            <div className='work-intro-tags-mobile'>
              <span>NASSS-framework</span>
              <span>Prototype</span>
              <span>Lo & Hi fidelity UI</span>
              <span>Pilot</span>
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
              <p>How can the succes of the adoption of Maatje for healthcare workers be improved?</p>
              <h5>Target audience</h5>
              <p>Healthcare workers.</p>
              <h5>Value proposition</h5>
              <p>Verifiably increasing the succes of adoption.</p>
            </div>
            <div>
              <img src={profile} className='work-project-img' alt='max holding maatje' />
            </div>
            <div className='work-project-context'>
            <h5>Context</h5>
              <p>Dutch healthcare is experiencing a short in staff which causes healthcare workers to experience stress and less enjoyment of their work. Luckily there is a new innovation called Maatje which is a little, friendly robot designed to support healthcare workers in the caretaking of elderly with dementia. Maatje does this by entertaining, interacting or reminding the elderly of things (e.g. the good old times or taking medicine).</p>
              <p>By doing this, the elderly will be able to be more independent. Which means the healthcare worker can spend less time helping them and more time enjoying them. However there is one major problem, healthcare workers are not successfully adopting Maatje and therefor Maatje cannot have it's intendent impact. A problem this project aimed to solve.</p>
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

          <div className='work-product'>
            <div className='work-product-intro'>
              <h5>UX and UI improvements</h5>
              <p>In the User Experience there have been made three major improvements, these are:</p>
            </div>
            <div className='work-product-presentation'>
              <h3>(1) A presentation to convince healthcare workers of the value of Maatje in order to motivate them to work with the technology.</h3>
              <a className='button desktop-hidden' href='https://onedrive.live.com/embed?resid=6112B6F77F657CCE%21432830&amp;authkey=!AOvkgl8b3fsGLEA&amp;em=2&amp;wdAr=1.7777777777777777' target={'_blank'} rel="noreferrer">View PowerPoint</a>
              <p>This presentation was needed because the healthcare workers did not understand the technology and were sometimes even afraid to work with it because they think it is too complicated. Both reasons make it so that the healthcare workers do not believe in the value of Maatje.</p>
              <p>The presentation takes away these doubts by explaining the technology in an understandable way, placing old situations in a new context using Maatje and giving examples to the healthcare workers to experiment with.</p>
              <iframe className='mobile-hidden' title="Maatje powerpoint" src="https://onedrive.live.com/embed?resid=6112B6F77F657CCE%21432830&amp;authkey=!AOvkgl8b3fsGLEA&amp;em=2&amp;wdAr=1.7777777777777777"></iframe>
            </div>
            <div className='work-product-tutorial'>
              <h3>(2) An improved UI with interactive tutorial for the system used to control Maatje.</h3>
              <a className='button' href='https://labu2l.axshare.com/' target={'_blank'} rel="noreferrer">View prototype</a>
              <p>The improved UI was needed because interviews and surveying showed that the old UI was too complicated for healthcare workers and did not offer enough support to actually use Maatje to create impact. These problems have been tackled by creating an interactive tutorial which is understandable, efficient and motivating.</p>
              <p>Very important in this tutorial are the examples given to motivate the healthcare worker to experiment with Maatje which causes major improvements in the adoption. While doing this the tutorial also explains the limitations of Maatje to make sure the healthcare workers have the right idea of what Maatje can and cannot do.</p>
              {/* <img src={dialoog} className='work-product-img' alt='interactieve tutorial' /> */}
            </div>
            <div className='work-product-questionlist'>
              <h3>(3) An AI question list used to fill the system with information about the client.</h3>
              <p>The AI question list is a new product that was needed in the user experience because the focusgroups and PESTEL-analysis showed that healthcare workers do not have enough time to learn and use Maatje.</p>
              <p>Before, healthcare workers had to program every sentence or action that Maatje would perform. Now, by letting the healthcare workers complete a simple question list, AI can automatically create dialogue and actions for Maatje.</p>
              <iframe title="AI question list" src="https://www.youtube.com/embed/_9BJrvXmpM4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
              <p>The succes of adoption has been verifiably improved by influencing six factors of adoption with various improvements in the UX and UI. The six factors of adoption, together with their old- and new score (Bad - 1 / 5 - Good) are shown below, tested during a pilot of 4 weeks.</p>
              <div className='work-impact-impact-table'>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th className='red'>Old</th>
                      <th className='green'>New</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Relative advantage</td>
                      <td className='red'>2,30</td>
                      <td className='green'>3,33</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Compatibility</td>
                      <td className='red'>2,30</td>
                      <td className='green'>3,29</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Complexity</td>
                      <td className='red'>2,67</td>
                      <td className='green'>3,54</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Trialability</td>
                      <td className='red'>2,64</td>
                      <td className='green'>4,00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Observability</td>
                      <td className='red'>3,03</td>
                      <td className='green'>3,63</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Uncertainty</td>
                      <td className='red'>2,20</td>
                      <td className='green'>3,00</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Average</td>
                      <td className='red'>2,50</td>
                      <td className='green'>3,47</td>
                      <td className='green flex'>19,4%<img src={greenarrow} className='work-impact-impact-arrow' alt='arrow up'/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> 

            <div className='work-impact-learnings'>
              <h5>Key learnings</h5>
              <p>The most important key learning that I can take away from this project is developing a new digital product that is verifiably able to change the behaviour of the user. This skill can be used in other projects to design a digital product that can influence a user (e.g. to lose weight, to create a better learning routine or to motivate to buy a certain product).</p>
              <p>Other key learnings that I learned during this project is the ability to analyse the market to create a viable product, targeted to a certain target audience. This included  communication with experts and stakeholders to learn from their expertise with a technology (robotica) that is new to me, making sure my results are unbiased and ethical.</p>
              <p>During the project I also focussed heavily on developing myself as a leader, using the book '7 habits of highly effective people' written by Franklin Covey. Using these habits I was able to create a new routine that helps me to be goal focussed, doing what I love and improving myself day by day.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
export default Maatje;