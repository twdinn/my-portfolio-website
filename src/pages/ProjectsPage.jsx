import Project from "../components/Project";
import { v4 as uuidv4 } from "uuid";

const ProjectsPage = () => {
  const id = uuidv4();
  const projects = [
    {
      id: { id },
      name: "Amazon Clone",
      desc: "A clone of Amazon",
      proLink: "https://twdinn.github.io/amazon/",
      image: "./media/amazon-clone.jpeg",
    },
    {
      id: { id },
      name: "Sensa Humour",
      desc: "A social media app where you post funny jokes",
      proLink: "https://twdinn.github.io/social-media-jokes-app/",
      image: "./media/sensa-humour.jpeg",
    },
    {
      id: { id },
      name: "SuperHero Generator",
      desc: "Search for a SuperHero and get back a picture and some stats. You can also choose to display a random Hero",
      proLink: "https://twdinn.github.io/superhero-api-react/",
      image: "./media/superhero-generator.jpeg",
    },
    {
      id: { id },
      name: "Weather App",
      desc: "Search a city and get the current forcast",
      proLink: "https://twdinn.github.io/react-weather-api/",
      image: "./media/weather-app.jpeg",
    },
    {
      id: { id },
      name: "Tip Calculator",
      desc: "Enter bill amount, tip percentage and amount of people splitting the bill and get the total back ",
      proLink: "https://twdinn.github.io/react-tip-calculator/",
      image: "./media/tip-calculator.jpeg",
    },
    {
      id: { id },
      name: "Rock Paper Scissors Game",
      desc: "Play Rock Paper Scissors against the computer",
      proLink: "https://twdinn.github.io/rock-paper-scissors/",
      image: "./media/rock-paper-scissors.jpeg",
    },
    {
      id: { id },
      name: "Pokedex",
      desc: "A List of Pokemon",
      proLink: "https://twdinn.github.io/pokedex/",
      image: "./media/pokedex.jpeg",
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
