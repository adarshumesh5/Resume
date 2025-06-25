import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './ThemeContext';

const About = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Container sx={{ mt: 5, minHeight: '100vh' }}>
      {/* Top bar */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          ADARSH UMESH
        </Typography>
        <Box display="flex" gap={2}>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? '🌙' : '☀️'}
          </IconButton>
          <Button variant="outlined" onClick={() => navigate('/')}>
            Home
          </Button>
        </Box>
      </Box>

      {/* Glassy card */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        <Grid container spacing={3} alignItems="flex-start">
          {/* Image — fixed small size, top-left */}
          <Grid
            item
            xs={12}
            md="auto"
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/AdarshImage.jpg`}
              alt="Adarsh Umesh"
              sx={{
                width: 192,          // ~2 in
                height: 192,
                maxWidth: '100%',
                borderRadius: 2,
                boxShadow: 4,
                objectFit: 'cover'
              }}
            />
          </Grid>

          {/* Text begins immediately after image (wraps on small screens) */}
          <Grid item xs={12} md>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>

            <Typography variant="body1" paragraph>
              Born and raised in Bengaluru, India, I completed my schooling and
              earned a B.E. in Electronics & Communication before beginning my
              career at GlobalLogic India Private Limited as a Software
              Engineer. There I built customer-facing web experiences and
              micro-services, worked closely with Product and Engineering
              Managers, and led Agile ceremonies as a Scrum Master.
            </Typography>

            <Typography variant="body1" paragraph>
              Partnering daily with cross-functional leaders highlighted a gap
              in my management toolkit, so I pursued an M.E.M. at California State University. 
              The program blended analytics, finance, and leadership
              with deep tech, equipping me to translate between business and
              engineering with confidence.
            </Typography>

            <Typography variant="body1" paragraph>
              I'm now seeking Business Analyst or related roles where I can
              combine my software background, data-driven mindset, and newly
              honed management skills to drive product strategy and deliver
              user-centric solutions.
            </Typography>

            <Typography variant="body1" paragraph>
              Outside work, you’ll find me capturing cityscapes through my
              camera lens, hiking nearby trails, or giving back via open-source
              communities—always learning, always building.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
