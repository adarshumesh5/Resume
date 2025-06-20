import React from "react";
import { Typography, Divider, Box, Chip, Paper, useTheme } from "@mui/material";
import Certifications from "./Certifications";

const Skills = () => {
  const theme = useTheme();
  const skillList = [
    "React.js", "Redux", "Node.js", "Java", "Python", "JUnit", "Jest", "Mocha",
    "Scrum", "Agile", "Requirement Gathering", "User Stories", "Use Cases",
    "Epics & Features", "Process Mapping", "UAT", "Stakeholder Communication",
    "Microsoft Office", "JIRA", "Confluence", "Tableau", "Figma", "SDLC"
  ];

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>SKILLS & CERTIFICATIONS</Typography>
      <Divider sx={{ mb: 2 }} />

      <Paper
        sx={{
          p: 2,
          mb: 2,
          backgroundColor: theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: 2,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: 6
          }
        }}
      >
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
      </Paper>

      <Certifications />
    </Box>
  );
};

export default Skills;