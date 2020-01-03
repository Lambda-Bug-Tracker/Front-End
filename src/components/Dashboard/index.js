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
      <h1>Hello, world!</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0 0,100 0,100 100,0 100" />
        </svg>
      </div>
    </Wrapper>
  );
}
