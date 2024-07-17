import { Link } from "react-router-dom";
import aboutImg from "../images/about.jpg";
import Title from "./Title";

const About = () => {
  return (
    <div>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImg} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>We are CNC Customs</h3>
            <p>
              We are a one-stop-shop specializing in CNC Machining, Design and
              Prototyping. We have the expertise to take your idea from
              inception to prototype and manufacture. The brainchild of two
              enigneers, we aim to fill the void left by major players in the
              CNC arena, and meet the.....
            </p>
            <Link to="/info" className="btn">
              Read more
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};
export default About;
