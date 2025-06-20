import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from './ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("https://formspree.io/f/xnnvzyyv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ firstName: '', lastName: '', subject: '', message: '' });
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("❌ Network error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
      {/* Top bar with name and controls */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          ADARSH UMESH
        </Typography>
        <Box display="flex" gap={2}>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? "🌙" : "☀️"}
          </IconButton>
          <Button variant="outlined" onClick={() => navigate("/")}>Home</Button>
        </Box>
      </Box>

      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: theme.palette.mode === "dark"
            ? "0 0 20px rgba(255, 255, 255, 0.05)"
            : "0 0 10px rgba(0, 0, 0, 0.1)",
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: 6
          }
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Contact Me
        </Typography>

        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Subject"
            name="subject"
            fullWidth
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>

        {statusMessage && (
          <Typography mt={2} align="center" color={statusMessage.includes("✅") ? "success.main" : "error.main"}>
            {statusMessage}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Contact;
