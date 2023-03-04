import { v4 as uuidv4 } from "uuid";

const Project = ({ name, desc, proLink, image, prodSkills }) => {
  const id = uuidv4();
  return (
    <section className="project">
      <a href={proLink}>
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
        <div className="project-img">
          <img src={image} alt={name} />
        </div>
        <div className="prod-skills">
          {prodSkills.map((prodSkill) => (
            <p key={id} className="prod-skill">
              {prodSkill}
            </p>
          ))}
        </div>
      </a>
    </section>
  );
};

export default Project;
