import React from 'react';
import { StatusBar } from 'expo-status-bar';

// Components
import Home from "./components/Home"

// Styles
import { Container } from './styles/appStyles';


export default function App() {

  return(
    <Container>
      <Home />
      <StatusBar style="light"/>
    </Container>
  );
}


