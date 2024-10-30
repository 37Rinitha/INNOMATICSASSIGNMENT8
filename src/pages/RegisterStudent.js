// src/pages/RegisterStudent.js
import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext.js';
import { useNavigate } from 'react-router-dom';

const RegisterStudent = () => {
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  });

  const handleChange = e => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newStudent = { ...student, id: Date.now() }; // Generate unique ID for new student
    addStudent(newStudent);
    navigate('/students'); // Redirect to student list page after adding
  };

  return (
    <div className="register-student">
      <h1>Register New Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="class"
          placeholder="Class"
          value={student.class}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={student.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;
