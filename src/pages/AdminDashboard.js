import React from 'react';
import { Typography, Paper } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography>Welcome to admin control panel!</Typography>
    </Paper>
  );
};

export default AdminDashboard;