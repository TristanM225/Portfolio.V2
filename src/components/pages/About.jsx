import profile from 'src/assets/pic-of-me.jpg'

const About = () => {
    return (
        <div className="container-fluid bg-night h-100">
          <div className="row p-5 ps-4 pt-3">
            <h2 className="display-2 text-myWhite">About Me</h2>
          </div>
          <img src={profile} className="px-5"></img>
          <div className="row p-5 ps-5">
            <div id="aboutMe" className="row text-myWhite">
              <p> Hi my name is Tristan </p>
            </div>
          </div>
        </div>
    )
  }
  
  export default About