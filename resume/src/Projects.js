import React from "react";
import { Typography, Divider, Paper, List, ListItem, ListItemText, Box } from "@mui/material";

const Projects = () => (
  <Box my={4}>
    <Typography variant="h5" gutterBottom>Projects</Typography>
    <Divider sx={{ mb: 2 }} />

    <ProjectEntry
      title="Smart Pothole Detection System"
      bullets={[
        "Led a team of 3 to build a pothole detection system using sensors and OpenCV.",
        "Achieved 82% detection accuracy."
      ]}
    />

    <ProjectEntry
      title="Robot Movement Automation with Computer Vision"
      bullets={[
        "Created technical documentation and collaborated with stakeholders.",
        "Achieved 72% accuracy in automated movement detection."
      ]}
    />

    <ProjectEntry
      title="Market and Cost Analysis for UV Toothbrush Sanitizer"
      bullets={[
        "Turned market insights into business requirements for MVP scoping.",
        "Improved prototyping cycles and iteration speed."
      ]}
    />
  </Box>
);

const ProjectEntry = ({ title, bullets }) => (
  <Paper
    sx={{
      p: 2,
      mb: 2,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.2)',
        boxShadow: 4
      }
    }}
  >
    <Typography variant="subtitle1"><strong>{title}</strong></Typography>
    <List dense>
      {bullets.map((bullet, index) => (
        <ListItem key={index}>
          <ListItemText primary={`• ${bullet}`} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default Projects;
