import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>CNC Customs</h1>
        <p>Making your ideas work!</p>
        <Link to="/contact" className="btn hero-btn">
          Contact us
        </Link>
      </div>
    </section>
  );
};
export default Home;
