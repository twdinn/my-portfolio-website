import About from "../components/About";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="profile-container">
        <img className="profile-pic" src="/media/profile.jpeg" alt="Profile" />
      </div>
      <About />
      <Skills />
    </section>
  );
};

export default HomePage;
