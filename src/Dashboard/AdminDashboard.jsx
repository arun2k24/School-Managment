import React, { useState } from 'react';

import SubjectManagement from '../Management/SubjectManagement';
import TeacherManagement from '../Management/TeacherManagement';
import StudentManagement from '../Management/StudentManagement';

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('students');

  const renderView = () => {
    switch (currentView) {
      case 'students':
        return <StudentManagement />;
      case 'subjects':
        return <SubjectManagement />;
      case 'teachers':
        return <TeacherManagement />;
      default:
        return <StudentManagement />;
    }
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-500 text-white p-6">
        <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'students' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('students')}
              title="Manage student-related tasks"
            >
              Manage Students
            </button>
          </li>
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'subjects' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('subjects')}
              title="Manage subject-related tasks"
            >
              Manage Subjects
            </button>
          </li>
          <li>
            <button
              className={`block w-full py-2 px-4 rounded ${
                currentView === 'teachers' ? 'bg-blue-700' : 'hover:bg-blue-600'
              }`}
              onClick={() => setCurrentView('teachers')}
              title="Manage teacher-related tasks"
            >
              Manage Teachers
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-6 bg-gray-100 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div>{renderView()}</div>
      </main>
    </div>
  );
};

export default AdminDashboard;
