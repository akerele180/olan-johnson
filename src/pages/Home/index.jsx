import { Fragment } from "react";
import "./Home.scss";
import BannerVideo from "../../assets/olan-johnson.mp4";
import BannerPoster from "../../assets/banner.jpg";

const Home = () => {
  return (
    <section className="hero__section">
      <video autoPlay loop poster={BannerPoster}>
        <source src={BannerVideo} />
      </video>
    </section>
  );
};

export default Home;
