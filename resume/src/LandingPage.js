import React from "react";
import { Box, Typography, Button, Link, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-parallax";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "./ThemeContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Parallax
      bgImage={`${process.env.PUBLIC_URL}/landing-background.jpg`}
      strength={400}
      blur={{ min: -10, max: 20 }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(3px)",
          px: 2,
          position: "relative"
        }}
      >
        {/* Top bar with About, Contact, Theme Toggle and Icons */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 3, pt: 2, position: "absolute", width: "100%", top: 0, left: 0 }}
        >
          <Box display="flex" gap={2}>
            <Button
              variant="text"
              color="inherit"
              onClick={() => navigate('/about')}
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              About Me
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={() => navigate('/contact')}
              sx={{ fontWeight: "bold", textTransform: "none" }}
            >
              Contact Me
            </Button>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <IconButton onClick={toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? "🌙" : "☀️"}
            </IconButton>

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
        </Box>

        {/* Centered Name and Resume CTA */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "100vh",
            textAlign: "center"
          }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            ADARSH UMESH
          </Typography>
          <Typography variant="h6" align="center" mb={4}>
            Product Engineer | Problem Solver | Innovator
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/resume")}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: "30px",
              background: "linear-gradient(to right, #00c6ff, #0072ff)",
              color: "#fff",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              textTransform: "none",
              '&:hover': {
                background: "linear-gradient(to right, #0072ff, #00c6ff)",
                transform: "scale(1.05)"
              },
              transition: "all 0.3s ease"
            }}
          >
            🚀 View My Resume
          </Button>
        </Box>
      </Box>
    </Parallax>
  );
};

export default LandingPage;
