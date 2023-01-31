import Project from "../components/Project";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "Sensa Humour",
      desc: "A social media app where you post funny jokes",
      proLink: "https://twdinn.github.io/social-media-jokes-app/",
      image: "/media/sensa-humour.png",
    },
    {
      id: 2,
      name: "SuperHero Generator",
      desc: "Search for a SuperHero and get back a picture and some stats. You can also choose to display a random Hero",
      proLink: "https://twdinn.github.io/superhero-api-react/",
      image: "/media/superhero-generator.png",
    },
    {
      id: 3,
      name: "Weather App",
      desc: "Search a city and get the current forcast",
      proLink: "https://twdinn.github.io/react-weather-api/",
      image: "/media/weather-app.png",
    },
    {
      id: 4,
      name: "Tip Calculator",
      desc: "Enter bill amount, tip percentage and amount of people splitting the bill and get the total back ",
      proLink: "https://twdinn.github.io/react-tip-calculator/",
      image: "/media/tip-calculator.png",
    },
    {
      id: 5,
      name: "Rock Paper Scissors Game",
      desc: "Play Rock Paper Scissors against the computer",
      proLink: "https://twdinn.github.io/react-rock-paper-scissors-game/",
      image: "/media/rock-paper-scissors.png",
    },
  ];
  return (
    <section>
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          desc={project.desc}
          proLink={project.proLink}
          image={project.image}
        />
      ))}
    </section>
  );
};

export default ProjectsPage;
