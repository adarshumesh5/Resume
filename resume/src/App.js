
import './App.css';
import React from "react";
import { Container, Typography } from "@mui/material";
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';
import { Link } from "@mui/material";

function App() {
  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Adarsh Umesh
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Los Angeles, CA | +1 (747)333-4258 | adarshumesh657@gmail.com | {" "}
  <Link href="https://www.linkedin.com/in/adarsh-umesh/" target="_blank" rel="noopener">
    LinkedIn
  </Link>{" "} | {" "}
  <Link href="https://github.com/adarshumesh5" target="_blank" rel="noopener">
    GitHub
  </Link>{" "}
      </Typography>

      <Education/>
      <WorkExperience />
      <Projects />
      <Skills />
    </Container>
  );
};

export default App;
