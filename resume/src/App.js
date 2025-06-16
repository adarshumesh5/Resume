
import './App.css';
import React from "react";
import { Container, Typography } from "@mui/material";
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Adarsh Umesh
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Los Angeles, CA | +1 (747)333-4258 | adarshumesh657@gmail.com | LinkedIn | GitHub
      </Typography>

      <Education/>
      <WorkExperience />
      <Projects />
      <Skills />
    </Container>
  );
};

export default App;
