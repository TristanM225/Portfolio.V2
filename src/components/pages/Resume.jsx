import resume from '../../assets/Resume.pdf'

const Resume = () => {
    return (
    <>
        <div className='container-fluid bg-myblack h-100'>
            <div className='row px-5 pt-3 ps-4'>
                <h2 className='display-2 hookers-green'>Resume</h2>
            </div> 
            <div className='rpw py-3 text-hookers-green'>
                <iframe type="application/pdf" src= {resume} width= '100%' height= '900px' title='Resume'></iframe>
            </div>
        </div>
    </>
    );
};

export default Resume;