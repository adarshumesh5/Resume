import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 5, minHeight: '100vh' }}>
      <Button
        variant="outlined"
        onClick={() => navigate('/resume')}
        sx={{ mb: 3 }}
      >
        ← Back to Resume
      </Button>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a passionate and detail-oriented professional with a background in engineering management, product development, and frontend development. I enjoy turning complex challenges into elegant, human-centered solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            I thrive in collaborative environments and bring a balance of technical and leadership experience. Outside work, I enjoy photography, hiking, and contributing to open source.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/about-me.jpg`}
            alt="Adarsh Umesh"
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 4
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
