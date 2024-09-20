import React, { useEffect, useState } from 'react';
import './Team.css'
const Team = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])
  return (
    <div>
      <h2 className='section-title pt-4 pb-5'>Our Team</h2>
    <div className='team-container container'>
      <div className="row">
        {
          projects.map(project => (
            <div key={project.id} className=' col-lg-4 col-md-6 g-2'>
              <div className='image-container'>
                <img src={project.img} alt="" />
              </div>
              <h5 className='project-title text-start'>
                {project.name}
              </h5>
              <p className='project-des text-start'></p>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Team;