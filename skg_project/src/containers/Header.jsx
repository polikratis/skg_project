import "./header.css";
import people from "../assets/people.png";

const Header = () => {
  return (
    <div className="app__header" id="home">
      <div className="app__header-content">
        <h1 className="gradient__text"></h1>
        <p></p>
        <div className="app__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
        </div>
        <div className="app__header-content__people">
          <img src={people} alt="people" />
          <p>500 people requested access a visit in last 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
