import React from "react";
import { Typography, Divider, Box, Chip } from "@mui/material";
import Certifications from "./Certifications";

const Skills = () => {
  const skillList = [
    "React.js", "Redux", "Node.js", "Java", "Python", "JUnit", "Jest", "Mocha",
    "Scrum", "Agile", "Requirement Gathering", "User Stories", "Use Cases",
    "Epics & Features", "Process Mapping", "UAT", "Stakeholder Communication",
    "Microsoft Office", "JIRA", "Confluence", "Tableau", "Figma", "SDLC"
  ];

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>Skills & Certifications</Typography>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="body1" gutterBottom><strong>Skills:</strong></Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {skillList.map((skill, index) => (
          <Box
            key={index}
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 3
              }
            }}
          >
            <Chip label={skill} />
          </Box>
        ))}
      </Box>

      <Certifications />
    </Box>
  );
};

export default Skills;
