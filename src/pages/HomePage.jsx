import About from "../components/About";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="profile-container">
        <img className="profile-pic" src="/media/profile.jpg" alt="Profile" />
      </div>
      <About />
    </section>
  );
};

export default HomePage;
