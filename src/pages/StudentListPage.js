// src/pages/StudentListPage.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const StudentListPage = () => {
  const { students, removeStudent } = useContext(StudentContext); // Access students and removeStudent from context
  const [search, setSearch] = useState('');

  // Filter students based on search input
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle delete action
  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      removeStudent(id); // Call removeStudent from context
    }
  };

  return (
    <div className="student-list-page">
      <h1>Student List</h1>
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <Link to={`/students/${student.id}`}>View</Link> | 
                <Link to={`/students/edit/${student.id}`}>Edit</Link> | 
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentListPage;
