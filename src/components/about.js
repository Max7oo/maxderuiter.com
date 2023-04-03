import '../styling/about.css'

import arrow from '../media/arrow.svg';
import profile from '../media/max-uitleg.jpg'

import figma from '../media/icons/figma.svg';
import adobexd from '../media/icons/adobe-xd.svg';
import github from '../media/icons/github.svg';
import axure from '../media/icons/axure.svg';
import visualstudiocode from '../media/icons/visual-studio-code.svg';
import adobe from '../media/icons/adobe.svg';

function About() {
    return (
        <section id='about'>
            <div className='breadcrum-items'>
                <a href='#about' className='breadcrum-item'>
                    <p>ABOUT ME</p>
                    <img src={arrow} className='breadcrum-item-arrow' alt='arrow down'/>
                </a>
            </div>

            <div id='about' className='about'>
                <div className='about-me'>
                    <h4>Hi, I am Max</h4>
                    <p>Recently graduated from the MSc Digital Technologies, where I continued to learn about developing digital technologies, specializing in behaviour science, while also learning about the development of sustainable business models, leadership, responsibility, communication and ethics.</p>
                    <p>My favourite part in developing is the human connection with the stakeholders and target audience, making sure their needs are identified using Layman's terms and are translated into a technical design with which developers can work.</p>
                    <p>As an interactive developer by heart, I take on the role as front-end developer during the development fase of the project.</p>
                </div>

                <div className='about-profile'>
                        <img src={profile} className='about-profile-image' alt='profile' />
                    </div>

                <div className='about-skills'>
                    <div>
                        <h5>Expertise</h5>
                        <div className='about-skills-expertise'>
                            <span>UX/UI</span>
                            <span>Front-end</span>
                            <span>Behaviour science</span>
                            <span>Communication</span>
                            <span>Leadership</span>
                            <span>Ethics</span>
                            <span>Business</span>
                        </div>
                    </div>

                    <div>
                        <h5>Tools</h5>
                        <div className='about-skills-tools'>
                            <span><img src={figma} alt='figma' />Figma</span>
                            <span><img src={github} alt='github' />Github</span>
                            <span><img src={adobexd} alt='adobe xd' />Adobe Xd</span>
                            <span><img src={axure} alt='axure' />Axure</span>
                            <span><img src={adobe} alt='adobe' />Adobe</span>
                            <span><img src={visualstudiocode} alt='visual studio code' />VS Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default About;
  