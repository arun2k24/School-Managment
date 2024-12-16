import React, { useState } from 'react';

// Student List Component
const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <ul className="bg-yellow-200 p-4 rounded-lg shadow-md">
        {students.map((student, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <span>{student.name}</span>
            <div>
              {/* Edit button */}
              <button
                onClick={() => onEdit(student)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 mr-2"
              >
                Edit
              </button>

              {/* Delete button */}
              <button
                onClick={() => onDelete(student.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add Student Component (for adding or editing)
const AddStudent = ({ student, onSave, onCancel }) => {
  const [studentInfo, setStudentInfo] = useState(student || { name: '', id: '', age: '' });

  // Handle input changes
  const handleChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  // Save the student (either add or edit)
  const handleSave = () => {
    onSave(studentInfo);
  };

  return (
    <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full mx-auto my-6">
      <h3 className="text-2xl font-semibold">{student ? 'Edit Student' : 'Add New Student'}</h3>

      <div className="mt-4">
        <label className="block mb-2">Student Name</label>
        <input
          type="text"
          name="name"
          value={studentInfo.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter student name"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Student ID</label>
        <input
          type="text"
          name="id"
          value={studentInfo.id}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter student ID"
        />
      </div>

      <div className="mt-4">
        <label className="block mb-2">Age</label>
        <input
          type="text"
          name="age"
          value={studentInfo.age}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter student age"
        />
      </div>

      <div className="mt-4">
        {/* Save button */}
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          {student ? 'Save Changes' : 'Add Student'}
        </button>

        {/* Cancel button */}
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Main Student Management Component
const StudentManagement = () => {
  const [view, setView] = useState('list');
  const [students, setStudents] = useState([
    { name: 'John Doe', id: 'S123', age: '16' },
    { name: 'Jane Smith', id: 'S124', age: '17' },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Toggle between Add and List view
  const toggleView = () => {
    setView(view === 'list' ? 'add' : 'list');
  };

  // Handle saving a student (adding or editing)
  const handleSaveStudent = (student) => {
    if (editingStudent) {
      setStudents(
        students.map((s) => (s.id === student.id ? student : s))
      );
    } else {
      setStudents([...students, student]);
    }
    setEditingStudent(null);
    setView('list');
  };

  // Handle editing a student
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setView('add');
  };

  // Handle deleting a student
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      {/* Heading and toggle button */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">
          {view === 'list' ? 'Manage Students' : 'Add Student'}
        </h2>
        <button
          onClick={toggleView}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {view === 'list' ? 'Add Student' : 'Back to List'}
        </button>
      </div>

      {/* Conditional rendering based on view */}
      {view === 'list' ? (
        <StudentList
          students={students}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />
      ) : (
        <AddStudent
          student={editingStudent}
          onSave={handleSaveStudent}
          onCancel={() => setView('list')}
        />
      )}
    </div>
  );
};

export default StudentManagement;
