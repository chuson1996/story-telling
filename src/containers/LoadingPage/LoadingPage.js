import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 40px;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default class LoadingPage extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <h2>Quotes from</h2>
        <h1>Steal Like An Artist</h1>
        <p>- Austin Kleon -</p>
      </Container>
    );
  }
}
