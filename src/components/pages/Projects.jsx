/* eslint-disable react/jsx-key */



import codingQuiz from '../../assets/Coding_quiz.png';
import employeeTracker from '../../assets/employeeTracker.png';
import findYourMuse from '../../assets/findyourmuse.png';
import oldportfolio from '../../assets/old-portfolio.png';
import passwordGenerator from '../../assets/PasswordGenerator.png';
import planner from '../../assets/Planner.png';
import quizify from '../../assets/Quizify_home.png';

const portfolioPics = [
  {
    src: codingQuiz,
    title: 'Coding Quiz',
    alt: 'Simple Coding Quiz',
    repo: 'https://github.com/TristanM225/Code_Quiz',
    link: 'https://tristanm225.github.io/Code_Quiz/',
},
{
  src: employeeTracker,
  title: 'Employee Tracker',
  alt: 'Back end for a Employee Tracker',
  repo: 'https://github.com/TristanM225/Employee_Tracker',

},
{
  src: findYourMuse,
  title: 'Find Your Muse',
  alt: 'Music based on your mood',
  repo: 'https://github.com/itsa-me-dea/FindYourMuse',
  link: 'https://itsa-me-dea.github.io/FindYourMuse/',
},
{
  src: oldportfolio,
  alt: 'The OG portfolio',
  title: 'OG Portfolio',
  repo: 'https://github.com/TristanM225/Portfolio',
  link: 'https://tristanm225.github.io/Portfolio/',
},
{
  src: passwordGenerator,
  alt: 'a password generator',
  title: 'Password Generator',
  repo: 'https://github.com/TristanM225/RandomPasswordCreater',
  link: 'https://tristanm225.github.io/RandomPasswordCreater/',
},
{
  src: planner,
  alt: 'a daily planner',
  title: 'Planner',
  repo: 'https://github.com/TristanM225/EventCalander',
  link: 'https://tristanm225.github.io/EventCalander/',
},
{
  src: quizify,
  alt: 'A quiz making site',
  title: 'Quizify',
  repo: 'https://github.com/GSuhir/Quizify',
}
];

const Project = () => {
  return (
    
    <div className="products">
      
      {portfolioPics.map((Object) => (
        <div className="card">
          <header className="title">{Object.title}</header>
          <a href={Object.repo}>
            <img
              src={Object.src}
              alt="JATE"
              className=" zoom  "
            />
          </a>
          {Object.link ? (
            <a href={Object.link}>Deployed Site</a>
          ) : null}
        </div>
      ))}
    </div>
   
  );
};
  
  export default Project;