import React from "react";
import { Typography, Divider, Paper, Box } from "@mui/material";

const Education = () => (
  <Box my={4}>
    <Typography variant="h5" gutterBottom>Education</Typography>
    <Divider sx={{ mb: 2 }} />

    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">California State University Northridge, CA</Typography>
      <Typography variant="subtitle1">Master of Science in Engineering Management | May 2025</Typography>
      <Typography variant="body2">
        GPA: 3.4/4 | Concentration: Product Design, Leadership of Engineering Professionals, Operations Management, Lean Manufacturing, Decision tools, Tech Entrepreneurship, Data Analytics, Data Visualization, Engineering Economics, Project Management 
      </Typography>
    </Paper>

    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">CMR Institute of Technology, Bangalore, India</Typography>
      <Typography variant="subtitle1">Bachelor of Engineering in Electronics and Communication | Aug 2020</Typography>
      <Typography variant="body2">
        GPA: 6.71/10 | Concentration: Network theory, Programming in C, C++, and Java, Digital System Processing, Control Systems, Analog Electronics Circuits, Digital Electronics, Verilog HDL, FPGA Based System design Using Verilog, Control Systems, Microcontrollers, Operating Systems, Microwave Theory & Antennas, VLSI Design, Computer Organization & ARM Microcontrollers, Digital System Design using Verilog, Network Analysis.
      </Typography>
    </Paper>
  </Box>
);

export default Education;
