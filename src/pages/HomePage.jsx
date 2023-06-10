import About from "../components/About";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="intro">
        <div className="profile-container">
          <div>
            <img
              className="profile-pic"
              src="./media/profile1.jpeg"
              alt="Profile"
            />
          </div>
        </div>
        <About />
      </div>
      <div className="skills">
        <h2>My Skills</h2>
        <Skills />
      </div>
    </section>
  );
};

export default HomePage;
