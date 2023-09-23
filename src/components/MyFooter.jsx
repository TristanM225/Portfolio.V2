import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  
  
  return (
    <>
      <div className=" text-center footerStyle">
        <div className="row justify-content-md-center pt-5">
          <div className="col fs-1">
            <a href="https://github.com/TristanM225" target="_blank" rel="noopener noreferrer" >
              <AiFillGithub />
            </a>
          </div>
          <div className=" col fs-1">
          <a href="https://www.linkedin.com/in/tristan-melillo/ " target="_blank" rel="noopener noreferrer" >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="col fs-1">
          <a href="https://stackoverflow.com/users/22617191/tristan-melillo" target="_blank" rel="noopener noreferrer">
              <BsStackOverflow />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;