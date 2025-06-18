import React from 'react';
import { Typography, Link, Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div>
      <Typography variant="h4" gutterBottom align="center">
        ADARSH UMESH
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Los Angeles, CA | +1 (747)-333-4258 | adarshumesh657@gmail.com
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mb={2}>
        <Link
          href="https://www.linkedin.com/in/adarsh-umesh/"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#0a66c2'
            }
          }}
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link
          href="https://github.com/adarshumesh5"
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.2)',
              color: '#333'
            }
          }}
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </Box>
    </div>
  );
}

export default Header;