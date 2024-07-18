import skg from "../assets/skg.png";
import "./about.css";

const About = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={skg} alt="skg" />
    </div>
    <div className="app__wrapper_info app__about-content">
      <h1 className="headtext__cormorant">Thessaloniki</h1>

      <div className="app__about-content">
        <p className="p__opensans">
          Also known as Thessalonica, is the second-largest city in Greece. It
          has slightly over one million inhabitants in its metropolitan area and
          serves as the capital of the geographic region of Macedonia.
        </p>
      </div>
    </div>
  </div>
);

export default About;
