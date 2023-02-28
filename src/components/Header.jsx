import { Link } from "react-router-dom";
import { FaAws, FaGithub, FaLinkedin, FaCode, FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nav-link" to="/">
          <FaHome />
        </Link>
        <Link className="nav-link" to="/projects">
          <FaCode />
        </Link>

        <Link className="github nav-link" to="https://github.com/twdinn">
          <FaGithub />
        </Link>
        <Link
          className="linkedin nav-link"
          to="https://www.linkedin.com/in/tyler-dinn-1a2b3c4d/"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="aws nav-link"
          to="https://www.credly.com/users/tylerdinn"
        >
          <FaAws />
        </Link>
        <a className="email nav-link" href="mailto:dinnwt@gmail.com">
          <GrMail />
        </a>
      </nav>
    </header>
  );
};

export default Header;
