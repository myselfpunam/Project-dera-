import React from 'react';
import { Card } from 'react-bootstrap';
import './ShortProject.css'
import project_1 from '../assets/images/project_1.png'
import project_2 from '../assets/images/project_2.png'
import project_3 from '../assets/images/Project_3.png'
const ShortProject = () => {
  return (
    <section className='shortProject-container pt-4'>
      <div className="container pt-5">
        <h2 className='section-title pt-4 pb-5'>Our Recent Work</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={project_1}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>Project 1</Card.Title>
                    <Card.Subtitle>Location</Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio assumenda hic nostrum eos fuga fugit harum asperiores officia consectetur repellat, quas temporibus quaerat repudiandae ullam qui! Eos, vero dolores!
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={project_2}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>Project 2</Card.Title>
                    <Card.Subtitle>Location</Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio assumenda hic nostrum eos fuga fugit harum asperiores officia consectetur repellat, quas temporibus quaerat repudiandae ullam qui! Eos, vero dolores!
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={project_3}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>Project 3</Card.Title>
                    <Card.Subtitle>Location</Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio assumenda hic nostrum eos fuga fugit harum asperiores officia consectetur repellat, quas temporibus quaerat repudiandae ullam qui! Eos, vero dolores!
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={project_1}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>Project 1</Card.Title>
                    <Card.Subtitle>Location</Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio assumenda hic nostrum eos fuga fugit harum asperiores officia consectetur repellat, quas temporibus quaerat repudiandae ullam qui! Eos, vero dolores!
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={project_2}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>Project 2</Card.Title>
                    <Card.Subtitle>Location</Card.Subtitle>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio assumenda hic nostrum eos fuga fugit harum asperiores officia consectetur repellat, quas temporibus quaerat repudiandae ullam qui! Eos, vero dolores!
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={project_3}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>Project 3</Card.Title>
                    <Card.Subtitle className='text-subtitle'>Location</Card.Subtitle>
                    <Card.Text className='text-description'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio assumenda hic nostrum eos fuga fugit harum asperiores officia consectetur repellat, quas temporibus quaerat repudiandae ullam qui! Eos, vero dolores!
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className='pb-4'>
          <button className='about-btn'>MORE PROJECT</button>
        </div>
      </div>
    </section>
  );
};

export default ShortProject;