import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Title = styled.div`
  margin: 1rem 0;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Subtitle = styled.div`
  text-align: left;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`;

export default function Homepage() {
  return (
  <Container>
      <Title>Welcome to monday borad view template</Title>
      <Subtitle>by Boost.</Subtitle>
  </Container>
  );
}
