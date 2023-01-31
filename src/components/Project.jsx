import { Link } from "react-router-dom";

const Project = ({ name, desc, proLink, image }) => {
  return (
    <section className="project">
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="desc">
        <p>{desc}</p>
      </div>
      <div className="project-link">
        <Link to={proLink}>
          <img src={image} alt={name} />
        </Link>
      </div>
    </section>
  );
};

export default Project;
