import React, { useState } from 'react';

function StudentDashboard({ studentId }) {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    studentId: 'S12345',
    phoneNumber: '123-456-7890',
    age: '16',
    address: '123 Main St, City, Country',
    fatherName: 'Mr. John Sr.',
    motherName: 'Mrs. Jane Doe',
    fatherOccupation: 'Engineer',
    motherOccupation: 'Teacher',
    picture: null,
  });

  const [subjects, setSubjects] = useState([
    { subject: 'Math', teacher: 'Mr. Smith', time: 'Mon, Wed, Fri - 10:00 AM' },
    { subject: 'Science', teacher: 'Ms. Johnson', time: 'Tue, Thu - 2:00 PM' },
    { subject: 'English', teacher: 'Mr. Williams', time: 'Mon, Fri - 1:00 PM' },
  ]);

  // Handle profile updates
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, picture: file });
  };

  const handleSaveProfile = () => {
    alert('Profile updated successfully!');
  };

  const handleDeleteProfile = () => {
    setProfile({
      name: '',
      studentId: '',
      phoneNumber: '',
      age: '',
      address: '',
      fatherName: '',
      motherName: '',
      fatherOccupation: '',
      motherOccupation: '',
      picture: null,
    });
  };

  return (
    <div className="flex w-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-green-300 text-white p-6">
        <h2 className="text-2xl font-bold mb-5">Student Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="#profile" className="block py-2 px-4 rounded hover:bg-gray-700">
              Profile
            </a>
          </li>
          <li>
            <a href="#subjects" className="block py-2 px-4 rounded hover:bg-gray-700">
              Subjects
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-6 bg-gray-100">
        {/* Profile Section */}
        <div className="bg-yellow-200 shadow-md rounded-lg p-6 w-full mx-auto my-6" id="profile">
          <h2 className="text-2xl font-semibold mt-7">Profile</h2>

          {/* Profile Picture */}
          <div className="flex flex-col items-center mt-4">
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-3 p-2 border rounded"
            />
            {profile.picture && (
              <img
                src={URL.createObjectURL(profile.picture)}
                alt="Profile"
                className="mt-4 rounded-full w-24 h-24 object-cover"
              />
            )}
          </div>

          {/* Profile Details */}
          <div className="mt-5">
            <button
              onClick={handleSaveProfile}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Save Profile
            </button>
            <button
              onClick={handleDeleteProfile}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Delete Profile
            </button>
          </div>
        </div>

        {/* Subjects Section */}
        <div id="subjects" className="mt-10">
          <h2 className="text-2xl font-semibold">Subjects</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 mt-5">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Subject</th>
                  <th className="py-2 px-4 border-b text-left">Teacher</th>
                  <th className="py-2 px-4 border-b text-left">Time</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{subject.subject}</td>
                    <td className="py-2 px-4 border-b">{subject.teacher}</td>
                    <td className="py-2 px-4 border-b">{subject.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
