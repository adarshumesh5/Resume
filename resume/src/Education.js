import React from "react";
import { Typography, Divider, Paper, Box, useTheme } from "@mui/material";

const Education = () => {
  const theme = useTheme();

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>Education</Typography>
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
        <Typography variant="h6">California State University Northridge, CA</Typography>
        <Typography variant="subtitle1">Master of Science in Engineering Management | May 2025</Typography>
        <Typography variant="body2">
          GPA: 3.4/4 | Concentration: Product Design, Leadership of Engineering Professionals, Operations Management, Lean Manufacturing, Decision tools, Tech Entrepreneurship, Data Analytics, Data Visualization, Engineering Economics, Project Management 
        </Typography>
      </Paper>

      <Paper
        sx={{
          p: 2,
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
        <Typography variant="h6">CMR Institute of Technology, Bangalore, India</Typography>
        <Typography variant="subtitle1">Bachelor of Engineering in Electronics and Communication | Aug 2020</Typography>
        <Typography variant="body2">
          GPA: 6.71/10 | Concentration: Network theory, Programming in C, C++, and Java, Digital System Processing, Control Systems, Analog Electronics Circuits, Digital Electronics, Verilog HDL, FPGA Based System design Using Verilog, Control Systems, Microcontrollers, Operating Systems, Microwave Theory & Antennas, VLSI Design, Computer Organization & ARM Microcontrollers, Digital System Design using Verilog, Network Analysis.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Education;
