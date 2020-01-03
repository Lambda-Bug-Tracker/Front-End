import React from 'react';
import { Wrapper, Button } from 'bushido-strap';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/auth';

import lambdaBanner from '../../assets/img/lambda-banner.png';
import "./styles.scss";

import styled, { keyframes } from "styled-components";
import {flipInX} from "react-animations";

const flipAnim = keyframes`${flipInX}`;

const randomDuration = () =>{
  let random = Math.floor(Math.random() * (6000 - 800)) + 500;
  console.log(random)
  return random
}

const ProjectCard = styled.div`
  animation: ${()=> randomDuration()}ms ${flipAnim};
`

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Wrapper>
      <div className='main'>
        <div className='dashboard'>
          <div className='top-row'>
            <img src={lambdaBanner} alt="Lambda School Logo" />
            <Button onClick={handleSignOut}>Sign Out</Button></div>
            <div className='main-container'>
              <h2>Welcome First_Name Last_Name!</h2>
              <div className="project-group-container">
              <h4 className="projecth4">These are your projects:</h4>
                <div className="project-group">
                  {/* Map over user projects here */}
                    <ProjectCard className="project-card">
                      Project_Name
                    </ProjectCard>
                    <ProjectCard className="project-card">
                      Project_Name
                    </ProjectCard>
                    <ProjectCard className="project-card">
                      Project_Name
                    </ProjectCard>
                    <ProjectCard className="project-card">
                      Project_Name
                    </ProjectCard>
                    <ProjectCard className="project-card">
                      Project_Name
                    </ProjectCard>
                </div>
                <Button>New Project</Button>
              </div>
            </div>
        </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0 0,100 0,100 100,0 100" />
        </svg>
      </div>
    </Wrapper>
  );
}
