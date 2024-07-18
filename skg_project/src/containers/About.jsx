import skg from "../assets/skg.png";
import "./about.css";

const About = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={skg} alt="skg" />
    </div>
    <div className="app__wrapper_info app__about-content">
      <h1 className="headtext__cormorant">Why SKG?</h1>

      <div className="app__about-content">
        <p className="p__opensans">
          Thessaloniki, with its rich history, ancient sites, and vibrant
          culture, is a must-visit destination. Explore archaeological gems like
          the 7th-century Church of Agios Dimitrios and the 6th-century Agia
          Sofia. Indulge in the city’s gastronomic delights, from bougatsa
          pastries to local street food. Thessaloniki’s lively nightlife and
          stunning coastlines make it an ideal getaway. Plus, use it as a base
          to explore nearby wineries and coastal towns.
        </p>
      </div>
    </div>
  </div>
);

export default About;
