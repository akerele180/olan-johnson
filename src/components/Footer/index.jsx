import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      <div className="md:grid grid-cols-3 items-center justify-between md:w-[70vw] mx-auto md:py-20 py-10 max-md:px-8">
        <ul className="list-none">
          <p className="text-4xl leading-10 my-5">Lagos</p>
          <li className="leading-10">Maryland 123</li>
          <li className="leading-10">100242 - LAG</li>
          <li className="leading-10">+234 8099846538</li>
          <li className="leading-10">info@olanjohnson.com</li>
        </ul>
        <ul className="list-none">
          <p className="text-4xl leading-10 my-5">London</p>
          <li className="leading-10">135 Bishopsgate</li>
          <li className="leading-10">EC2M 3AN</li>
          <li className="leading-10">+44 207 067 0000</li>
          <li className="leading-10">info@olanjohnson.com</li>
        </ul>
        <ul className="list-none">
          <p className="text-4xl leading-10 my-5">New York</p>
          <li className="leading-10">909 Third Avenue</li>
          <li className="leading-10">NY 10022 - USA</li>
          <li className="leading-10">+1 212 546 7977</li>
          <li className="leading-10">info@olanjohnson.com</li>
        </ul>
      </div>

      <div className="social__links uppercase">
        <ul className="md:flex items-center justify-center pb-5">
          <li className="md:px-5  max-md:px-8  max-md:leading-10">facebok</li>
          <li className="md:px-5  max-md:px-8  max-md:leading-10">twitter</li>
          <li className="md:px-5  max-md:px-8  max-md:leading-10">youtube</li>
          <li className="md:px-5  max-md:px-8  max-md:leading-10">instagram</li>
          <li className="md:px-5  max-md:px-8  max-md:leading-10">whatsapp</li>
        </ul>
      </div>
      <p className="text-center py-5">
        <span className="px-3">Privacy Notice</span>
        <span className="px-3">Cookie Policy</span>
      </p>
      <span className="md:absolute md:top-3/4 md:left-0 left__side text-[10px] text-gray-400 md:rotate-90   max-md:block max-md:text-center">
        {" "}
        &copy; {new Date().getUTCFullYear()} OLAN AND JOHNSON
      </span>
      <span className="md:absolute md:top-3/4 md:right-0 right__side text-[10px] text-gray-200 md:-rotate-90  max-md:block  max-md:text-center">
        Designed and Developed by Tosin Akerele
      </span>
    </footer>
  );
};

export default Footer;
