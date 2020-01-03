import React from 'react';

import { Wrapper, Button } from 'bushido-strap';

import { useDispatch } from 'react-redux';

import { signOut } from '../../store/actions/auth';

import "./styles.scss";

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
            <Button onClick={handleSignOut}>Sign Out</Button></div>
            <div className='main-container'>
              <h2>Welcome First_Name Last_Name!</h2>
              <div className="bug-group-container">
                <div className="bug-group">
                  <h4 className="progressh4">Projects I belong to</h4>
                    <div className="progress-column">
                      List of projects
                    </div>
                  </div>
                <div className="bug-group">
                  <h4 className="progressh4">Projects I am admin of</h4>
                    <div className="progress-column">
                      List of projects
                    </div>
                  </div>
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
