import About from "../components/About";
import Skills from "../components/Skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="profile-container">
        <div>
          <img
            className="profile-pic"
            src="/media/profile.jpeg"
            alt="Profile"
          />
        </div>
        <div className="icons">
          <Link className="github" to="https://github.com/twdinn">
            <FaGithub />
          </Link>
          <Link
            className="linkedin"
            to="https://www.linkedin.com/in/tyler-dinn-1a2b3c4d/"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <About />
      <Skills />
    </section>
  );
};

export default HomePage;
