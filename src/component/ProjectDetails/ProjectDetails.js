import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const {id}= useParams()
  return (
    <div className='project-container'>
      {id}
    </div>
  );
};

export default ProjectDetails;