import React from "react";
import { Typography, Divider, Paper, List, ListItem, ListItemText, Box, useTheme, Link } from "@mui/material";

const Projects = () => {
  const theme = useTheme();

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>PROJECTS</Typography>
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
        title="Robot Movement Automation with Computer Vision – Autonomous Object Tracking"
        bullets={[
          "Built a 4-wheel autonomous robot capable of tracking and following objects using image processing algorithms without GPS or LIDAR, reducing hardware complexity.",
          "Implemented Scale-Invariant Feature Transform (SIFT) in OpenCV to achieve orientation and scale-invariant object recognition with high accuracy.",
          "Designed two use cases warehouse rack following and road vehicle tracking with real-time image capture, processing, and movement using ESP8266 and Unity 3D.",
          "Integrated NodeMCU, motor driver, and Android AR app to create a closed-loop system; optimized real-time tracking under varied lighting and motion conditions.",
          <>View full report: <Link href={`${process.env.PUBLIC_URL}/PR3098.pdf`} target="_blank" rel="noopener" underline="hover">📘 Robot Automation Final Report</Link></>
        ]}
        theme={theme}
      />

      <ProjectEntry
        title="UV Toothbrush Sanitizer – Product Design"
        bullets={[
          "Designed and prototyped a UV toothbrush sanitizer targeting hygiene in shared spaces during and post-pandemic, addressing bacterial risks with 99.9% sterilization efficiency.",
          "Led market and customer analysis to identify product opportunities, incorporating features like UV-C sterilization, safety shutoff, and multi-brush compatibility.",
          "Created CAD and SketchUp 3D models and built functional prototypes to validate ergonomic and electronic design feasibility using ABS and quartz materials.",
          "Performed cost and lifecycle analysis, achieving a projected unit cost of $20–$21 and enabling sustainable manufacturing practices with recyclable components.",
          <>View full Report: <Link href={`${process.env.PUBLIC_URL}/MSE 415 - Final Presentation Group 9 - UV Tooth Brush Sanitizer.pdf`} target="_blank" rel="noopener" underline="hover">📘 UV Sanitizer Final Report</Link></>
        ]}
        theme={theme}
      />

      <ProjectEntry
        title="Project Management: Hands-on STEM Activity Kit for Grade 5"
        bullets={[
          "Enhanced curriculum alignment by analyzing survey feedback from teachers, parents, and students, resulting in a Grade 5 activity kit that meets educational standards.",
          "Led iterative prototype development and internal testing cycles, improving usability and engagement of the final kit based on insights from QA and child participants.",
          "Streamlined risk management by mitigating external testing delays with neighborhood sessions, maintaining a CPI and SPI of 1.0.",
          "Created and refined instructional content and checklists, reducing classroom execution errors by 30% through real-time testing.",
          <>View full report: <Link href={`${process.env.PUBLIC_URL}/Mse 402 Handbook.pdf`} target="_blank" rel="noopener" underline="hover">📘 MSE 402 Project Report</Link></>
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
        <ListItem key={index} alignItems="flex-start">
          <ListItemText
            primary={
              typeof bullet === 'string'
                ? `• ${bullet}`
                : <Typography component="span" variant="body2">• {bullet}</Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default Projects;
