import React from "react";
import { Typography, Divider, Paper, List, ListItem, ListItemText, Box, useTheme, Link } from "@mui/material";

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
          "Collaborated on API documentation, localization for 24 languages, and performance testing with JMeter.",
          <>Led cross-functional Agile team to win the Q3 2022 Eminence Award by driving continuous delivery, and enhancing collaboration with architects, PMs, and accessibility/localization teams. <Link href={`${process.env.PUBLIC_URL}/Team Rolling Thunders ,.pdf`} target="_blank" rel="noopener" underline="hover">🎖 View Certificate</Link></>
        ]}
        theme={theme}
      />

      <ExperienceEntry
        title="Associate Software Engineer"
        company="GlobalLogic India Private Limited (Contractor to iCIMS)"
        location="Bangalore, India"
        date="Jun 2021 – Dec 2021"
        bullets={[
          "Improved team efficiency by leading technical interviews for entry-level hires, resulting in 4 successful new additions aligned with project needs.",
          "Boosted accessibility compliance by integrating semantic HTML and ARIA roles, leading to a 20% improvement in Lighthouse accessibility scores.",
          "Increased delivery predictability by refining sprint planning inputs and ensuring dev tickets had clear acceptance criteria.",
          "Actively mentored Trainee Engineers on Git workflows, Jira usage, and debugging techniques, reducing onboarding time by 30%."
        ]}
        theme={theme}
      />

      <ExperienceEntry
        title="Trainee Software Engineer"
        company="GlobalLogic India Private Limited (Contractor to iCIMS)"
        location="Bangalore, India"
        date="Dec 2020 – May 2021"
        bullets={[
          "Reduced deployment defects by writing subsystem and regression test cases, contributing to the stabilization of early-stage microservices.",
          "Detected and resolved 10+ UI inconsistencies across different browsers and devices by conducting cross-browser compatibility testing.",
          "Accelerated development pipeline by learning and contributing to full-stack features across React.js, Node.js, and Spring Boot within the first 2 months.",
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
        <ListItem key={index} alignItems="flex-start">
          <ListItemText
            primary={
              typeof bullet === 'string' ? (
                `• ${bullet}`
              ) : (
                <Typography component="span" variant="body2">
                  • {bullet}
                </Typography>
              )
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default WorkExperience;
