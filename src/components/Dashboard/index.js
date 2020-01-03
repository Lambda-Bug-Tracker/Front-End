import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Wrapper, Button } from 'bushido-strap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth';
import axios from 'axios'
import CreateProject from './CreateProject';
import lambdaBanner from '../../assets/img/lambda-banner.png';
import "./styles.scss";

import styled, { keyframes } from "styled-components";
import {pulse, tada} from "react-animations";

const flipAnim = keyframes`${pulse}`;
const tadaAnim = keyframes`${tada}`;

const randomDuration = () => {
  let random = Math.floor(Math.random() * (6000 - 800)) + 500;
  return random;
};

const ProjectCard = styled.div`
  animation: ${() => randomDuration()}ms ${flipAnim};
  &:hover {
    animation: 1s ${tadaAnim};
  }
`;

export default function Dashboard(props) {
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch();
  const firebase = useSelector(state => state.firebase)
  const [projects, setProjects] = useState()
  // console.log(projects)
  // console.log(props)
  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://lambda-bug-tracker.herokuapp.com/projects/${firebase.auth.uid}`)
    .then(res => {
      // console.log(res)
      setProjects(res.data.projects)
      props.setProjects(res.data.projects)
    })
    .catch(err => console.log(err))
    }, 500)
    
  }, [])

  function handleNewProject(e) {
    e.preventDefault()
    setIsCreating(true)
  }

  function handleSignOut() {
    dispatch(logout());
  }
  return (
    <Wrapper>
      <div className='background'>
        <div className="main">
          <div className="dashboard">
            <div className="top-row">
              <img src={lambdaBanner} alt="Lambda School Logo" />
              <button id="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
            </div>
            <div className="main-container">
              <div className="project-group-container">
                <h2>Welcome {firebase.auth.displayName}!</h2>
                {isCreating ? <CreateProject {...props}setIsCreating={setIsCreating} setProjects={setProjects}/> : 
                <>
                <h4 className="projecth4">These are your projects:</h4>
  
                <div className="project-group">
                  {/* Map over user projects here */}
                  {projects && projects.map((item, index) => {
                    return (
                      <Link key={index} project={item} to={`/project/${item.project_id}`}>
                        <ProjectCard className="project-card">
                          <h3>{item.project_name}</h3>
                          <p>{item.description}</p>
                        </ProjectCard>
                      </Link>
                    )
                  })}
                </div>
                <button className="new-project-btn" onClick={handleNewProject}>New Project</button>
                </>
                }
              </div>
            </div>
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0 0,100 0,100 100,0 100" />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}
