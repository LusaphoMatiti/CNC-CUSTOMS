import React from "react";

const Info = () => {
  return (
    <section className="section info">
      <div className="section-title">
        <h2>About us</h2>
        <span className="underline"></span>
      </div>
      <div className="section-center info-center">
        <div className="info-info">
          <h3>Who We Are</h3>
          <p>
            We are a one-stop-shop specializing in CNC Machining, Design, and
            Prototyping. We have the expertise to take your idea from inception
            to prototype and manufacture.
          </p>
          <p>
            The brainchild of two engineers, we aim to fill the void left by
            major players in the CNC arena, addressing the needs of lower volume
            consumers and manual machining shops looking to produce volumes.
          </p>
          <p>
            Established in 2011, we have grown from a small business run from a
            home-based workshop to a facility offering access to smarter
            manufacturing.
          </p>

          <h3>Our Mission</h3>
          <p>
            At CNC Customs, we strive to bridge the gap between current manual
            manufacturing techniques and smarter automated manufacturing. We use
            faster, more efficient processes to produce high-quality complex and
            simple parts at lower costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
