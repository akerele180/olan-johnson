import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odio
          impedit corrupti et aliquam eum, deserunt saepe animi possimus
          veritatis corporis illo eaque modi eveniet, praesentium veniam vero
          suscipit id.
        </p>
      </div>
      <span className="left__side">
        {" "}
        &copy; {new Date().getUTCFullYear()} OLAN AND JOHNSON
      </span>
      <span className="right__side">
        Designed and Developed by Tosin Akerele
      </span>
      <div className="social__links">
        <ul>
          <li>facebok</li>
          <li>twitter</li>
          <li>youtube</li>
          <li>instagram</li>
          <li>whatsapp</li>
        </ul>
      </div>
      <p>
        <span>Privacy Notice</span>
        <span>Cookie Policy</span>
      </p>
    </footer>
  );
};

export default Footer;
