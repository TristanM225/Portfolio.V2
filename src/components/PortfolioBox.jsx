import Project from "../components/pages/Portfolio";

const Projects = () => {
  return (
    <>
      <div className="container-fluid bg-myBlack h-100">
        <div className="row px-5 pt-3 ps-4">
          <h2 className="display-2 text-myWhite">Projects</h2>
        </div>
        <div className="row row-cols-2 text-center">
          <Project />
        </div>
      </div>
    </>
  );
};

export default Projects;