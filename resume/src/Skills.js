import React from "react";
import { Typography, Divider, Box, Chip, Link } from "@mui/material";

const Skills = () => {
  const skillList = [
    "React.js", "Redux", "Node.js", "Java", "Python", "JUnit", "Jest", "Mocha",
    "Scrum", "Agile", "Requirement Gathering", "User Stories", "Use Cases",
    "Epics & Features", "Process Mapping", "UAT", "Stakeholder Communication",
    "Microsoft Office", "JIRA", "Confluence", "Tableau", "Figma", "SDLC"
  ];

  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom>Skills & Certifications</Typography>
      <Divider sx={{ mb: 2 }} />

      <Typography variant="body1" gutterBottom><strong>Skills:</strong></Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {skillList.map((skill, index) => (
          <Box
            key={index}
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 3
              }
            }}
          >
            <Chip label={skill} />
          </Box>
        ))}
      </Box>

      <Box mt={3}>
        <Typography variant="body1" gutterBottom><strong>Certifications:</strong></Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Link
            href="https://bcert.me/bc/html/show-badge.html?b=ckuhconk"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Certified Scrum Master (CSM)
          </Link>
          <Link
            href="https://www.credly.com/badges/c9abcbf1-19c3-4b89-81b3-549c28d02f24/linked_in_profile?trk=public_profile_see-credential"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Enterprise Design Thinking Practitioner
          </Link>
          <Link
            href="https://www.credly.com/badges/6ea592ac-7040-4ab4-b9fb-2e3c82cd4b02/linked_in_profile?trk=public_profile_see-credential"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            AI for Product Management
          </Link>
          <Link
            href="https://www.credly.com/badges/c3e46433-30f8-47b6-a229-ca4135ca25a0/linked_in_profile?trk=public_profile_see-credential"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Product Management Basics Certification
          </Link>
          <Link
            href="https://www.linkedin.com/learning/certificates/2d17b321851ece7921b5657b52fcda89ca13260894bf0e55caeb5f91d72d421b?trk=public_profile_see-credential"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Scrum: The Basics
          </Link>
          <Link
            href="https://www.linkedin.com/learning/certificates/99fc2ef308fc4ac94d2a4b424e45e89cc459d1e29e0814a080a7799f5dcbd347?trk=public_profile_see-credential"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Excel Essential Training (Microsoft 365)
          </Link>
          <Link
            href="https://www.linkedin.com/learning/certificates/6ac8a6730501f2bed5a60834dc9a283952d2f636c9ce1722cb21f0a5d87e383e?trk=public_profile_see-credential"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Product Management First Steps
          </Link>
          <Link
            href="https://www.linkedin.com/learning/certificates/1b31e4033adc7972a67d74f4b0807ec01e7503ab205e7663ce34c7a686e84777?accountId=0&u=0&success=true&authUUID=97J%2BlUciQuaZiKeUb1Gkng%3D%3D"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Aha! Product Management Professional Certificate
          </Link>
          <Link
            href="https://www.linkedin.com/learning/certificates/c07965405a1caf6dfad41c833a16faed11304086f67290fc597082ec5f9d82d2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhHvoNvgaS%2Fe6fwY0bJpcjg%3D%3D&accountId=0&u=0&success=true&authUUID=T%2Beaj0bBQDaExrru%2FFsSYQ%3D%3D"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            Product Management: Building a Product Roadmap
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
