import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  
  
  return (
    <>
      <div className="container-fluid text-center bg-myBlack fixed-bottom pb-5">
        <div className="row justify-content-md-center pt-5">
          <div className="col col-lg-2 fs-1">
            <a href="https://github.com/TristanM225" target="_blank" rel="noopener noreferrer" className="link-secondary">
              <AiFillGithub />
            </a>
          </div>
          <div className="col col-lg-2 fs-1">
          <a href="https://www.linkedin.com/in/tristan-melillo/ " target="_blank" rel="noopener noreferrer" className="link-secondary">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;