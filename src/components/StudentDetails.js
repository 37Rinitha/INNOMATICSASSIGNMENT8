// src/components/StudentDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/students.json';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const selectedStudent = mockData.find(s => s.id === parseInt(id));
    setStudent(selectedStudent);
  }, [id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="student-details">
      <h1>{student.name}</h1>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
};

export default StudentDetails;
