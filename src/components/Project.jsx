import { Link } from "react-router-dom";

const Project = ({ name, desc, proLink, image }) => {
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
      </a>
    </section>
  );
};

export default Project;
