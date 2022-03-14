import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import App from './App';
import './index.css';
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  background-image: linear-gradient(135deg, #457ef3 0%, #2EB1BB 70%);

  @media (min-width: 1024px) {
    height: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Navbar />
        <App />
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
