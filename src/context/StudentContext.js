// src/context/StudentContext.js
import React, { createContext, useState } from 'react';
import mockData from '../data/students.json';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(mockData);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };
  const removeStudent = (id) => {
    setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
