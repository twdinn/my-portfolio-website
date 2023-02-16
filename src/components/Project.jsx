import { Link } from "react-router-dom";

const Project = ({ name, desc, proLink, image }) => {
  return (
    <Link to={proLink}>
      <section className="project">
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
        <div className="project-img">
          {/* <a href={proLink}> */}
          <img src={image} alt={name} />
          {/* </a> */}
        </div>
      </section>
    </Link>
  );
};

export default Project;
