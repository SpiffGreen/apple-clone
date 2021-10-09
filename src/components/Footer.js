import React from "react";


function Footer() {

  return (
    <footer className="container">
      <div className="centerBlock">
        <div className="grid4">
          <div>
            <h3>Explore</h3>
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
                <a href="#s">AirPods</a>
              </li>
              <li>
                <a href="#s">iPod Touch</a>
              </li>
              <li>
                <a href="#s">AirTag</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#s">Apple Music</a>
              </li>
              <li>
                <a href="#s">Apple Arcade</a>
              </li>
              <li>
                <a href="#s">iCloud</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Account</h3>
            <ul>
              <li>
                <a href="#s">Manage your Apple ID </a>
              </li>
              <li>
                <a href="#s">iCloud.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>About Apple</h3>
            <ul>
              <li>
                <a href="#s">Newsroom</a>
              </li>
              <li>
                <a href="#s">Apple Leadership</a>
              </li>
              <li>
                <a href="#s">Career Opportunities</a>
              </li>
              <li>
                <a href="#s">Investors</a>
              </li>
              <li>
                <a href="#s">Ethics and Compliance</a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p><a href="#s">Find a retailer</a> near you.</p>
        <hr />
        <div className="grid3">
          <p>Copyright &copy; {(new Date()).getFullYear()} Apple Inc. All Rights Reserved.</p>
          <p><a href="#s">Terms of Use</a> | <a href="#s">Site Map</a></p>
          <p className="country">Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;