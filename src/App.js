// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RegisterStudent from './pages/RegisterStudent';
import StudentListPage from './pages/StudentListPage';
import StudentDetails from './components/StudentDetails';
import EditStudent from './pages/EditStudent';
import Navbar from './components/Navbar';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App app-background">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/students/edit/:id" element={<EditStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
