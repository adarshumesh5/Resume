import React from "react";
import { Link, Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialIcons = () => (
  <Box display="flex" alignItems="center" gap={2}>
    <Link
      href="https://www.linkedin.com/in/adarsh-umesh/"
      target="_blank"
      rel="noopener"
      color="inherit"
      aria-label="LinkedIn"
      sx={{
        transition: 'transform 0.2s ease',
        '&:hover': { transform: 'scale(1.2)', color: '#0a66c2' }
      }}
    >
      <LinkedInIcon fontSize="large" />
    </Link>
    <Link
      href="https://github.com/adarshumesh5"
      target="_blank"
      rel="noopener"
      color="inherit"
      aria-label="GitHub"
      sx={{
        transition: 'transform 0.2s ease',
        '&:hover': { transform: 'scale(1.2)', color: '#333' }
      }}
    >
      <GitHubIcon fontSize="large" />
    </Link>
  </Box>
);

export default SocialIcons;