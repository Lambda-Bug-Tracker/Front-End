import React from 'react';

import styled from 'styled-components'

import { Wrapper } from 'bushido-strap';

const Container = styled.div`
  img{
    width: 200px;
  }
  .spinner {
    animation: logo-spin infinite 5s linear;
  }

  @keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`

export default function Loading() {
  return (
    <Container>
    <Wrapper justify="center">
      <h2>Loading...</h2>
      <img className='spinner' src='../../img/titled-bug.png' alt='Bug Logo' />
    </Wrapper>
    </Container>
  );
}
