import About from "../components/About";

const HomePage = () => {
  return (
    <section className="homepage">
      <img className="profile-pic" src="./media/profile1.jpeg" alt="Profile" />

      <About />
    </section>
  );
};

export default HomePage;
