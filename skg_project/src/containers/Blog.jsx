import "./blog.css";
import { Article } from "../components";
import thess1 from "../assets/thess1.jpg";

import React from "react";

const Blog = () => {
  return (
    <div className="app__blog section__padding" id="blog">
      <div className="app__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="app__blog-container">
        <div className="app__blog-container_groupA">
          <Article imgUrl={thess1} date="" />
        </div>
        <div className="app__blog-container_groupB">
          <Article
            imgUrl={thess1}
            date="June 26, 2024"
            title="48 Hours in Thessaloniki: Louloudadika and Beyond"
          />
          <Article
            imgUrl={thess1}
            date="June 27, 2024"
            title="From Olympus to Meteora: Day Trips from Thessaloniki"
          />
          <Article
            imgUrl={thess1}
            date="June 28, 2024"
            title="Culinary Adventures: Thessaloniki’s Food Scene Unveiled"
          />
          <Article
            imgUrl={thess1}
            date="June 29, 2024"
            title="Exploring Ancient Treasures: A Weekend Itinerary in Thessaloniki"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
