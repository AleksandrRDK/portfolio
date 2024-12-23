import Header from '../../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import ProjectCard from '../ProjectCard/ProjectCard';
import Skills from '../Skills/Skills';
import ApiSkills from '../ApiSkills/ApiSkills';
import ContactMe from '../ContactMe/ContactMe';

import './App.scss';
import '../../styles/responsive.scss'

function App() {
  return (
    <>
      <div className='container'>
        <Header/>
        <AboutMe/>
        <ProjectCard/>
        <Skills/>
        <ApiSkills/>
        <ContactMe/>
      </div>
    </>
  );
}

export default App;
