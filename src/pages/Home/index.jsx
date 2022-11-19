import { Fragment } from "react";
import "./Home.css";
import BannerVideo from "../../assets/olan-johnson.mp4";
import BannerPoster from "../../assets/banner.jpg";
import HenessyGold from "../../assets/newhennessybrandvisualidentity_/hennesy-gold.png";
import GreenAfrica from "../../assets/green-africa.png";
import Moet from "../../assets/CYMK(Print) - TWO COLOUR (1) Moet/moet.png";
import Glen from "../../assets/6-assets new glenmorangie/Glen.png";

const Home = () => {
  return (
    <>
      <section className="hero__section">
        <video autoPlay loop poster={BannerPoster} muted>
          <source src={BannerVideo} />
        </video>
      </section>
      <section id="double__carousel"></section>
      <section
        id="principles"
        className="py-10 bg-black text-white  max-md:px-8"
      >
        <h2 className="text-2xl md:text-5xl text-center mx-auto md:w-3/4 md:py-20 md:leading-[4rem]">
          We have 3 key principles on how to get the most effective results for
          you
        </h2>
        <div className="md:grid grid-cols-3 md:gap-10 md:w-5/6 mx-auto pb-40">
          <div>
            <h3 className="uppercase text-2xl md:mb-5 mb-1 max-md:pt-8">
              01. think
            </h3>
            <p>
              We fully immerse ourselves in your brand and your audience to
              explore the core emotions we need to build on.
            </p>
          </div>
          <div>
            <h3 className="uppercase text-2xl md:mb-5 mb-1 max-md:pt-8">
              02. doing
            </h3>
            <p>
              We collaborate with our clients to fully appreciate the underlying
              issues in the brief.
            </p>
          </div>
          <div>
            <h3 className="uppercase text-2xl md:mb-5 mb-1 max-md:pt-8">
              03. believe
            </h3>
            <p>
              We build experiences first, spaces second because the space is
              simply the stage to help your brand engage your customer.
            </p>
          </div>
        </div>
      </section>

      <section id="others" className="bg-otherBackground py-10  max-md:px-8">
        <h2 className="text-2xl md:text-5xl text-center mx-auto md:w-3/4 py-10 md:py-20 md:leading-[4rem]">
          Olan Johnson creates comprehensive, future-focused solutions through 5
          core diciplines
        </h2>

        <div className="pb-10 md:pb-40 grid lg:grid-cols-5 gap-4 items-center justify-between md:w-[90vw] mx-auto">
          <div className="text-center">
            <h3 className="uppercase mb-3 text-2xl max-md:pt-4">
              interor & architecture
            </h3>
            <p>Creating awe-inspiring, branded environments</p>
          </div>
          <div className="text-center">
            <h3 className="uppercase mb-3 text-2xl max-md:pt-8">
              customer experience
            </h3>
            <p>
              Bringing brands to life through signature touchpoints & service
            </p>
          </div>
          <div className="text-center">
            <h3 className="uppercase mb-3 text-2xl max-md:pt-8">
              creative strategy
            </h3>
            <p>
              Differentiating brands through in-depth research & distinct
              positioning
            </p>
          </div>
          <div className="text-center">
            <h3 className="uppercase mb-3 text-2xl max-md:pt-8">
              graphic design
            </h3>
            <p>
              Activating spaces with engaging storytelling & intuitive
              wayfinding
            </p>
          </div>
          <div className="text-center">
            <h3 className="uppercase mb-3 text-2xl max-md:pt-8">
              project governance
            </h3>
            <p>Ensuring smooth coordination & collaboration</p>
          </div>
        </div>
      </section>

      <section id="patners__clients" className="bg-white ">
        <h2 className="text-2xl md:text-5xl text-center mx-auto md:w-3/4 py-10 md:py-20 md:leading-[4rem]">
          We reimagine consumer experiece for the world's leading brands
        </h2>
        <div className="md:grid md:grid-cols-4 md:items-center md:gap-20 md:w-[80vw] mx-auto pb-20">
          <div>
            <img src={GreenAfrica} alt="" />
          </div>
          <div>
            <img src={Moet} alt="" />
          </div>
          <div>
            <img src={HenessyGold} alt="" />
          </div>
          <div>
            <img src={Glen} alt="" />
          </div>
        </div>
      </section>

      <section id="awards__nd__honors" className="bg-otherBackground">
        <h2 className="text-2xl leading-10 text-center">
          Olan Johnson is honored to be acknowledged by many prestigious awards
        </h2>
        <div></div>
      </section>

      <section className="hero__section found__below">
        <video autoPlay loop poster={BannerPoster} muted>
          <source src={BannerVideo} />
        </video>
      </section>
    </>
  );
};

export default Home;
