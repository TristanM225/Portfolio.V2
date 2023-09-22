import { useState } from 'react';

import codingQuiz from '../../assets/Coding_quiz.png';
// import endorfins from '../../images/endorfins.png';
// import socialDB from '../../images/socialmediaDB.png';
// import expressNotes from '../../images/noteTaker.png';
// import README from '../../images/READMEgen.png';
// import scheduler from '../../images/scheduler.png';
// import quiz from '../../images/codingQuiz.png';
// import password from '../../images/passwordGen.png';
// import studyGuide from '../../images/studyGuide.png';
// import thymeForLunch from '../../images/thymeForLunch.gif';

const portfolioPics = [
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
                className="col"
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