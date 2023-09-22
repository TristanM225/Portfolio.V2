import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="nav nav-pills justify-content-end">
        <li className="nav-item px-5">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item px-5">
          <Link
            to="/Projects"
            className={
              currentPage === "/Projects" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item px-5">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item px-5">
        <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;