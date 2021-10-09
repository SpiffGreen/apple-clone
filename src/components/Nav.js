import React from "react";

import apple_icon from "../assets/images/globalnav_apple_image__cxwwnrj0urau_large.svg";
import search_icon from "../assets/images/icons8-search-30.png";

function Nav() {

  return (
    <nav>
      <img src={apple_icon} alt="icon" className="apple-icon" />
      <ul>
        <li>
          <a href="#s">Mac</a>
        </li>
        <li>
          <a href="#s">iPad</a>
        </li>
        <li>
          <a href="#s">iPhone</a>
        </li>
        <li>
          <a href="#s">Music</a>
        </li>
        <li>
          <a href="#s">Support</a>
        </li>
        <li>
          <a href="#s">Where to Buy</a>
        </li>
      </ul>
      <img src={search_icon} alt="search icon" className="search-icon" />
    </nav>
  );
}

export default Nav;