import React from 'react';
import { Typography, Link, Box, Stack, useMediaQuery } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box mb={4} px={2}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        gutterBottom
        sx={{ wordBreak: "break-word" }}
      >
        ADARSH UMESH
      </Typography>

      {/* CONTACT DETAILS STACK */}
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography variant="body2">Los Angeles, CA</Typography>
        <Typography variant="body2">+1 (747)-333-4258</Typography>
        <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
          adarshumesh657@gmail.com
        </Typography>
      </Stack>

      {/* ICONS ROW */}
      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        <Link
          href="https://www.linkedin.com/in/adarsh-umesh/"
          target="_blank"
          rel="noopener"
          color="inherit"
          aria-label="LinkedIn"
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
          aria-label="GitHub"
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
    </Box>
  );
}

export default Header;