import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="app__feature-container">
    <div className="app__feature-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="app__feature-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
