import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/auth/Signup'; // Adjust path as needed
import Login from './components/auth/Login'; // Example additional route
import Dashboard from './components/Dashboard'; // Example protected route

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Your signup route */}
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
