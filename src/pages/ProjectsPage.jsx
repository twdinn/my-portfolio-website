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
      prodSkills: ["React", "Redux", "CSS"],
    },
    {
      id: { id },
      name: "Sensa Humour",
      desc: "A social media app where you post funny jokes",
      proLink: "https://twdinn.github.io/social-media/",
      image: "./media/sensa-humour.jpeg",
      prodSkills: ["React", "CSS"],
    },
    {
      id: { id },
      name: "SuperHero Generator",
      desc: "Search for a SuperHero and get back a picture and some stats. You can also choose to display a random Hero",
      proLink: "https://twdinn.github.io/superhero-api-react/",
      image: "./media/superhero-generator.jpeg",
      prodSkills: ["React", "CSS"],
    },
    {
      id: { id },
      name: "Weather App",
      desc: "Search a city and get the current forcast",
      proLink: "https://twdinn.github.io/react-weather-api/",
      image: "./media/weather-app.jpeg",
      prodSkills: ["React", "CSS"],
    },
    {
      id: { id },
      name: "Tip Calculator",
      desc: "Enter bill amount, tip percentage and amount of people splitting the bill and get the total back ",
      proLink: "https://twdinn.github.io/react-tip-calculator/",
      image: "./media/tip-calculator.jpeg",
      prodSkills: ["React", "CSS"],
    },
    {
      id: { id },
      name: "NHL Quiz App",
      desc: "Quiz with questions about the NHL",
      proLink: "https://twdinn.github.io/quiz-app/",
      image: "./media/nhl-quiz.jpeg",
      prodSkills: ["HTML", "CSS", "Javascript"],
    },
    {
      id: { id },
      name: "Rock Paper Scissors Game",
      desc: "Play Rock Paper Scissors against the computer",
      proLink: "https://twdinn.github.io/rock-paper-scissors/",
      image: "./media/rock-paper-scissors.jpeg",
      prodSkills: ["HTML", "CSS", "Javascript"],
    },
    {
      id: { id },
      name: "Pokedex",
      desc: "A List of Pokemon",
      proLink: "https://twdinn.github.io/pokedex/",
      image: "./media/pokedex.jpeg",
      prodSkills: ["HTML", "CSS", "Javascript"],
    },
    {
      id: { id },
      name: "Newfoundland Page",
      desc: "A Page with Info about Newfoundland",
      proLink: "https://twdinn.github.io/newfoundland-page/",
      image: "./media/nl-page.jpeg",
      prodSkills: ["HTML"],
    },
  ];
  return (
    <section className="projects-list">
      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          desc={project.desc}
          proLink={project.proLink}
          image={project.image}
          prodSkills={project.prodSkills}
        />
      ))}
    </section>
  );
};

export default ProjectsPage;
