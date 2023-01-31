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
        <a href={proLink}>
          <img src={image} alt={name} />
        </a>
      </div>
    </section>
  );
};

export default Project;
