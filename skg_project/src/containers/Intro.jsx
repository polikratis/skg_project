// import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

// import { meal } from "../../constants";
import "./intro.css";
// import { useRef, useState } from "react";

const Intro = () => {
  //   const [playVideo, sePlayVideo] = useState(false);
  //   const vidRef = useRef();

  return (
    <div className="app__video flex__center">
      <iframe
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/ZwfkUMF6n3c?si=72GJ1WByS959PiAt"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Intro;
