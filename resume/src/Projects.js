import React from "react";
import { Typography, Divider, Paper, List, ListItem, ListItemText, Box, useTheme } from "@mui/material";

const Projects = () => {
  const theme = useTheme();

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>Projects</Typography>
      <Divider sx={{ mb: 2 }} />

      <ProjectEntry
        title="Smart Pothole Detection System"
        bullets={[
          "Led a team of 3 to build a pothole detection system using sensors and OpenCV.",
          "Achieved 82% detection accuracy."
        ]}
        theme={theme}
      />

      <ProjectEntry
        title="Robot Movement Automation with Computer Vision"
        bullets={[
          "Created technical documentation and collaborated with stakeholders.",
          "Achieved 72% accuracy in automated movement detection."
        ]}
        theme={theme}
      />

      <ProjectEntry
        title="Market and Cost Analysis for UV Toothbrush Sanitizer"
        bullets={[
          "Turned market insights into business requirements for MVP scoping.",
          "Improved prototyping cycles and iteration speed."
        ]}
        theme={theme}
      />
    </Box>
  );
};

const ProjectEntry = ({ title, bullets, theme }) => (
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
