import React from "react";
import { Typography, Divider, Box } from "@mui/material";

const Skills = () => (
  <Box my={4}>
    <Typography variant="h5" gutterBottom>Skills & Certifications</Typography>
    <Divider sx={{ mb: 2 }} />

    <Typography variant="body1" gutterBottom>
      <strong>Skills:</strong> React.js, Redux, Node.js, Java, Python, JUnit, Jest, Mocha, Scrum, Agile, Requirement Gathering, User Stories, Use Cases, Epics & Features, Process Mapping, UAT, Stakeholder Communication, Microsoft Office, JIRA, Confluence, Tableau, Figma, SDLC
    </Typography>

    <Typography variant="body1">
      <strong>Certifications:</strong> Certified Scrum Master (CSM), Design Thinking Practitioner
    </Typography>
  </Box>
);

export default Skills;