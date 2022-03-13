import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #4373fc;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <App />
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
