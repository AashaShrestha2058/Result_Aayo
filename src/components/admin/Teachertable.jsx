
"use client";
import React, { useEffect, useState } from 'react';
import supabase from '@/utils/client'; // Adjust the path to your Supabase client setup

const Teachertable = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const { data, error } = await supabase
        .from('teachers') 
        .select('*');

      if (error) {
        console.error('Error fetching teachers:', error);
      } else {
        setTeachers(data);
      }
    };

    fetchTeachers();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit teacher with ID: ${id}`);
    // Implement navigation to edit page or open a modal with the edit form
    // For example:
    // router.push(`/edit-teacher/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from('teachers')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting teacher:', error);
      } else {
        // Remove the deleted teacher from the state
        setTeachers(teachers.filter(teacher => teacher.id !== id));
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Gender</th>
            <th scope="col" className="px-6 py-3">Date of Birth</th>
            <th scope="col" className="px-6 py-3">Phone</th>
            <th scope="col" className="px-6 py-3">Username</th>
            <th scope="col" className="px-6 py-3">Password</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  className="w-10 h-10 rounded-full"
                  src={teacher.Image} // Assuming 'Image' is the column name for image URL
                  alt={teacher.Fullname}
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{teacher.Fullname}</div>
                </div>
              </th>
              <td className="px-6 py-4">{teacher.Email}</td>
              <td className="px-6 py-4">{teacher.Gender}</td>
              <td className="px-6 py-4">{teacher.DOB}</td>
              <td className="px-6 py-4">{teacher.Contact}</td>
              <td className="px-6 py-4">{teacher.username}</td> {/* Case-sensitive column name */}
              <td className="px-6 py-4">{teacher.password}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEdit(teacher.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(teacher.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teachertable;
