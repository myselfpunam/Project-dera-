import React, { useEffect, useState } from 'react';
import './Projects.css'
import { Link } from 'react-router-dom';
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div className='project-container container'>
      <div className="row">
        {
          projects.map(project => (
            <div key={project.id} className=' col-lg-4 col-md-6 g-2'>
              <div className='image-container'>
                <img src={project.img} alt="" />
              </div>
              <h5 className='project-title text-start'>
                <Link className='primary-text-anchor' to={`/projects/${project.id}`}>{project.name}</Link>
              </h5>
              <p className='project-des text-start'></p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;