/* eslint-disable react/jsx-key */



import codingQuiz from '../../assets/Coding_quiz.png';

const portfolioPics = [
  {
    src: codingQuiz,
    alt: 'Simple Coding Quiz',
    repo: 'https://github.com/TristanM225/Code_Quiz',
    link: 'https://tristanm225.github.io/Code_Quiz/',
},
{
  src: codingQuiz,
  alt: 'Simple Coding Quiz',
  repo: 'https://github.com/TristanM225/Code_Quiz',
  link: 'https://tristanm225.github.io/Code_Quiz/',
},
{
  src: codingQuiz,
  alt: 'Simple Coding Quiz',
  repo: 'https://github.com/TristanM225/Code_Quiz',
  link: 'https://tristanm225.github.io/Code_Quiz/',
},
{
  src: codingQuiz,
  alt: 'Simple Coding Quiz',
  repo: 'https://github.com/TristanM225/Code_Quiz',
  link: 'https://tristanm225.github.io/Code_Quiz/',
}







];

const Project = () => {
    return (
      <>
        {portfolioPics.map((Object) => (
          <div id="projectContainer" className="p-5">
            <a href={Object.link}>
              <img
                id="projectImg"
                src={Object.src}
                alt="JATE"
                className="col zoom products card"
              />
              <div id="projectMiddle">
              <div id="projectTitle">{Object.alt}</div>
              <div id="projectStack">{Object.repo}</div>
            </div>
            </a>
          </div>
        ))}
      </>
    );
  };
  
  export default Project;