import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative">
      <div className="grid grid-cols-3 items-center justify-between w-[70vw] mx-auto py-20">
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
      <span className="absolute top-3/4 left-0 left__side text-[10px] text-gray-400 rotate-90">
        {" "}
        &copy; {new Date().getUTCFullYear()} OLAN AND JOHNSON
      </span>
      <span className="absolute top-3/4 right-0 right__side text-[10px] text-gray-200 -rotate-90">
        Designed and Developed by Tosin Akerele
      </span>
      <div className="social__links uppercase">
        <ul className="flex items-center justify-center pb-5">
          <li className="px-5">facebok</li>
          <li className="px-5">twitter</li>
          <li className="px-5">youtube</li>
          <li className="px-5">instagram</li>
          <li className="px-5">whatsapp</li>
        </ul>
      </div>
      <p className="text-center py-5">
        <span className="px-3">Privacy Notice</span>
        <span className="px-3">Cookie Policy</span>
      </p>
    </footer>
  );
};

export default Footer;
