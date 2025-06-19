import React from "react";
import { Typography, Divider, Paper, List, ListItem, ListItemText, Box, useTheme } from "@mui/material";

const WorkExperience = () => {
  const theme = useTheme();

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>Experience</Typography>
      <Divider sx={{ mb: 2 }} />

      <ExperienceEntry
        title="Senior Software Engineer"
        company="GlobalLogic India Private Limited (Contractor to iCIMS)"
        location="Bangalore, India"
        date="Jan 2023 – Jul 2023"
        bullets={[
          "Served as Scrum Master for 4 Agile development teams, improving sprint delivery performance by 25%.",
          "Translated stakeholder requirements into user stories and managed backlogs.",
          "Led technical discussions with architects and stakeholders to define solutions."
        ]}
        theme={theme}
      />

      <ExperienceEntry
        title="Software Engineer"
        company="GlobalLogic India Private Limited (Contractor to iCIMS)"
        location="Bangalore, India"
        date="Jan 2022 – Dec 2022"
        bullets={[
          "Built scalable web applications using React.js, Node.js, and Java Spring Boot.",
          "Achieved 95% test coverage across stack using Jest, Mocha, and JUnit.",
          "Reduced technical debt by 25% and improved responsiveness by 30% using Redux.",
          "Collaborated on API documentation, localization for 24 languages, and performance testing with JMeter."
        ]}
        theme={theme}
      />

      <ExperienceEntry
        title="Associate Software Engineer"
        company="GlobalLogic India Private Limited (Contractor to iCIMS)"
        location="Bangalore, India"
        date="Jun 2021 – Dec 2021"
        bullets={[
          "Built scalable web applications using React.js, Node.js, and Java Spring Boot.",
          "Achieved 95% test coverage across stack using Jest, Mocha, and JUnit.",
          "Reduced technical debt by 25% and improved responsiveness by 30% using Redux.",
          "Collaborated on API documentation, localization for 24 languages, and performance testing with JMeter."
        ]}
        theme={theme}
      />

      <ExperienceEntry
        title="Trainee Software Engineer"
        company="GlobalLogic India Private Limited (Contractor to iCIMS)"
        location="Bangalore, India"
        date="Dec 2020 – May 2021"
        bullets={[
          "Built scalable web applications using React.js, Node.js, and Java Spring Boot.",
          "Achieved 95% test coverage across stack using Jest, Mocha, and JUnit.",
          "Reduced technical debt by 25% and improved responsiveness by 30% using Redux.",
          "Collaborated with senior developers in debugging and resolving production issues, reducing bug resolution time by 15%."
        ]}
        theme={theme}
      />
    </Box>
  );
};

const ExperienceEntry = ({ title, company, location, date, bullets, theme }) => (
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
    <Typography variant="h6">{title} @ {company}</Typography>
    <Typography variant="subtitle2">{location} | {date}</Typography>
    <List dense>
      {bullets.map((bullet, index) => (
        <ListItem key={index}>
          <ListItemText primary={`• ${bullet}`} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default WorkExperience;
