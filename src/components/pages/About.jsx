import profile from '../../assets/pic-of-me.jpg'

const About = () => {
    return (
        <div className="container-fluid box">
          <div className="">
            <h2 className="display-2 ">About Me</h2>
          </div>
          <img src={profile} className="px-5"></img>
          <div className="row p-5 ps-5">
            <div id="aboutMe" className="">
              <p> Hello, I'm Tristan Melillo, a 21-year-old aspiring software developer who recently completed the UCSD Full Stack coding bootcamp. I'm passionate about all things tech, and my love for video games has fueled my curiosity in the world of coding. I thrive on learning and tackling challenges head-on, constantly seeking new opportunities to expand my skills and create innovative solutions in the software development field. 

              </p>

              <h5>*For the portfolio page click on the image to go to the Github Repo. Click the Deployed Site text to get taken to the deployed site. Projects without a deployed site text do not have a deployed site. Enjoy!*</h5>
            </div>
          </div>
        </div>
    )
  }
  
  export default About