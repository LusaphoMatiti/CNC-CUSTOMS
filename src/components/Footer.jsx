import { otherPageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {otherPageLinks.map((link) => {
            const { id, href, text } = link;

            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-link"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            const { id, icon, href } = link;

            if (icon === "fas fa-envelope") {
              return (
                <li key={id}>
                  <a
                    href={`mailto:clint@cnccustoms.co.za`}
                    className="footer-icon"
                    rel="noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            }

            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; CNC Cutoms Pty Ltd
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>

        <p className="footer-note">
          Website created, maintained, and SEO by{" "}
          <a
            href="https://lmdevpro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LMDevPro
          </a>
          .
        </p>
      </footer>
    </div>
  );
};
export default Footer;
