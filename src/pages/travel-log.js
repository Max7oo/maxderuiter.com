import "../styling/work-item.css";

import Nav from "../components/nav";
import Footer from "../components/footer";

import destination from "../media/destination.jpg";
import travel from "../media/travel-log.jpg";
import places from "../media/places.jpg";
import activity from "../media/activity.jpg";
import request from "../media/request.jpg";
import extra from "../media/extra.jpg";
import arrow from "../media/arrow.svg";

function Travel() {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="bg"></div>
      <Nav />
      <header>
        <div className="work-intro">
          <h4>travel-log.nl</h4>
          <h6>Improving the logging and planning of travel using AI</h6>
          <div className="work-intro-tags">
            <span>Full-stack (C#, REACT & SQL)</span>
            <span>MVP</span>
            <span>Business plan</span>
            <span>AI</span>
            <span>Soft launch</span>
          </div>
        </div>

        <div className="work-intro-visual">
          <img
            src={travel}
            className="work-intro-visual-img"
            alt="mock-up mvp"
          />
        </div>

        <div className="work-intro-tags-mobile">
          <span>Full-stack (C#, REACT & SQL)</span>
          <span>MVP</span>
          <span>Business plan</span>
          <span>AI</span>
          <span>Soft launch</span>
        </div>
      </header>

      <section id="project">
        <div className="breadcrum-items">
          <a href="#project" className="breadcrum-item">
            <p>PROJECT</p>
            <img
              src={arrow}
              className="breadcrum-item-arrow"
              alt="arrow down"
            />
          </a>
        </div>

        <div className="work-project">
          <div className="work-project-info">
            <h5>Research question</h5>
            <p>How can AI be used to make travel planning easier?</p>
            <h5>Target audience</h5>
            <p>Travellers.</p>
            <h5>Value proposition</h5>
            <p>Logging and planning of travels.</p>
          </div>
          <div>
            <img
              src={destination}
              className="work-project-img"
              alt="let's find your next travel destination"
            />
          </div>
          <div className="work-project-context">
            <h5>Context</h5>
            <p>
              Traveling nowadays is easier and more accessible than ever before.
              Many people are able to travel multiple times per year and
              therefor need a new destination every time. The power of AI can be
              harnessed to accomplish this wish. This can be implemented in a
              website where travellers log their travels and use those to plan
              their next travels, a one stop shop so to speak.
            </p>
          </div>
        </div>
      </section>

      <section id="product">
        <div className="breadcrum-items">
          <a href="#product" className="breadcrum-item">
            <p>PRODUCT</p>
            <img
              src={arrow}
              className="breadcrum-item-arrow"
              alt="arrow down"
            />
          </a>
        </div>

        <div className="work-product">
          <div className="work-product-intro">
            <h5>Most important features</h5>
            <p>
              To create a User Experience that meets the travellers needs there
              are four main features.
            </p>
          </div>
          <div className="work-product-presentation">
            <h3>
              (1) An overview of places the traveller has visited together with
              a map to make it visual.
            </h3>
            <p>
              This list, together with the map, makes it easy for the traveller
              to see where he/she has been. This information can later be used
              by the AI to plan the next travel.
            </p>
            <img src={places} className="work-product-img" alt="places list" />
          </div>
          <div className="work-product-tutorial">
            <h3>
              (2) From the list of places, the traveller can select a couple to
              base the AI travel advise on.
            </h3>
            <p>
              The selected places are used to send a query to ChatGPT, ChatGPT
              then responds with a list of three destination that the traveller
              might be interested in. For each of those destinations, a top
              three activities is added to show what the destination has to
              offer.
            </p>
            <img
              src={request}
              className="work-product-img"
              alt="request ai travel advise"
            />
          </div>
          <div className="work-product-questionlist">
            <h3>
              (3) An activity feed to see where other travellers have been to
              gather inspiration.
            </h3>
            <p>
              This feed shows the newly logged places by other users that are
              followed by the traveller. Here, users can interact and inspire
              each other.
            </p>
            <img
              src={activity}
              className="work-product-img"
              alt="activity feed"
            />
          </div>
          <div className="work-product-extra">
            <h3>
              (4) Other features include CRUD functions for each place, user
              specific profiles and lists, saving AI travel advise and more.
            </h3>
            <img
              src={extra}
              className="work-product-img"
              alt="extra features"
            />
          </div>
        </div>
      </section>

      <section id="impact">
        <div className="breadcrum-items">
          <a href="#impact" className="breadcrum-item">
            <p>IMPACT</p>
            <img
              src={arrow}
              className="breadcrum-item-arrow"
              alt="arrow down"
            />
          </a>
        </div>

        <div className="work-impact">
          <div className="work-impact-impact">
            <h5>Impact of the project</h5>
            <p>
              During the soft launch, the website was used by 30 travellers to
              test all of the features. The conversations and feedback this let
              to was very interesting and can be used for a next version.
            </p>
            <p>
              Instead of the impact of the website on the user, there might have
              been more impact on me as a professional. This website is the
              first full-stack application I have created and published,
              therefor I experienced a steep learning curve.
            </p>
          </div>

          <div className="work-impact-learnings">
            <h5>Key learnings</h5>
            <p>
              This being my first full-stack application it was very interesting
              to learn about APIs and how to create them myself. Doing so, I
              learned a lot about the mathematical features C# has to offer. I
              also learned more about the functionalities REACT has to offer and
              had a lot of practice creating them.
            </p>
            <p>
              Because I launched the website myself, I had to figure out how to
              set up the back-end so that users can actually access the server
              and mutate the data. This being a .NET application I used Azure on
              the server side, which was quite a struggle to figure out. To
              store the data I used an Elephant SQL database and to store the
              pictures in the cloud I used Upload Cloud Services.
            </p>
            <p>
              Doing so, I also learned more about the cost of running an
              application like this one. Because I did not have many users the
              cost were low but I can imagine that these costs can explode once
              the website gains traction. This made me realise that I had to
              make the website more efficient and with the least possible amount
              of API calls. It also made me think about the actual business
              model and that in order to run this application I would need to
              make a premium version.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Travel;
