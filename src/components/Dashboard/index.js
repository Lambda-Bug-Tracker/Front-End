import React, { useState } from 'react';
import { Wrapper, Button } from 'bushido-strap';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/auth';
import CreateProject from './CreateProject';
import lambdaBanner from '../../assets/img/lambda-banner.png';
import "./styles.scss";

import styled, { keyframes } from "styled-components";
import {flipInX, tada} from "react-animations";

const flipAnim = keyframes`${flipInX}`;
const tadaAnim = keyframes`${tada}`;

const randomDuration = () =>{
  let random = Math.floor(Math.random() * (6000 - 800)) + 500;
  return random
}

const ProjectCard = styled.div`
  animation: ${()=> randomDuration()}ms ${flipAnim};
  &:hover{
            animation: 1s ${tadaAnim};
        }
`

export default function Dashboard() {
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch();

  function handleNewProject(e) {
    e.preventDefault()
    setIsCreating(true)
  }

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
              <div className="project-group-container">
              <h2>Welcome First_Name Last_Name!</h2>
              {isCreating ? <CreateProject setIsCreating={setIsCreating} /> : 
              <>
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
                <Button onClick={handleNewProject}>New Project</Button>
                </>
                }
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
