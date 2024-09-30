import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.github.com/" target="_blank" rel="noreferrer">
          <IoLogoGithub size={35} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <IoLogoLinkedin size={35} />
        </a>
      </div>
      <div className="footer__links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </div>
      <p>&copy; 2024 Real Estate. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
