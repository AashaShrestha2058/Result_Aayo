
"use client";

import React, { useEffect, useState } from "react";
import supabase from "@/utils/client";
import Addteacher from "@/components/admin/Addteacher";

export default function Teachertable() {
  const [teachers, setTeachers] = useState([]);
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      const { data, error } = await supabase.from("teachers").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setTeachers(data);
      }
    };

    fetchTeachers();
  }, []);

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setShowAddTeacher(true);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("teachers").delete().eq("id", id);
    if (error) {
      console.error("Error deleting teacher:", error);
    } else {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md">
      <button
        onClick={() => setShowAddTeacher(true)}
        className="bg-[#8AA4D6] hover:bg-[#253553] hover:text-white text-gray-700 py-2 px-4 mt-4 rounded text-xs absolute top-4 right-4"
      >
        +Add Teacher
      </button>

      {showAddTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[101]">
          <Addteacher
            onClose={() => {
              setShowAddTeacher(false);
              setEditingTeacher(null);
            }}
            teacher={editingTeacher}
            onSave={(savedTeacher) => {
              if (editingTeacher) {
                setTeachers((prevTeachers) =>
                  prevTeachers.map((teacher) =>
                    teacher.id === savedTeacher.id ? savedTeacher : teacher
                  )
                );
              } else {
                setTeachers((prevTeachers) => [...prevTeachers, savedTeacher]);
              }
              setShowAddTeacher(false);
              setEditingTeacher(null);
            }}
          />
        </div>
      )}

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#8AA4D6] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">ID</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Contact</th>
            <th scope="col">Address</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr
              key={teacher.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{teacher.id}</td>
              <td className="px-6 py-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={teacher.Image ? `data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(teacher.Image)))}` : "/path/to/default/image.png"}
                  alt="Teacher image"
                />
                <div className="ps-3 text-base font-semibold">{teacher.Fullname}</div>
              </td>
              <td className="px-6 py-4">{teacher.Email}</td>
              <td className="px-6 py-4">{teacher.Gender}</td>
              <td className="px-6 py-4">{teacher.DOB}</td>
              <td className="px-6 py-4">{teacher.Contact}</td>
              <td className="px-6 py-4">{teacher.Address}</td>
              <td className="px-6 py-4">{teacher.username}</td>
              <td className="px-6 py-4">{teacher.password}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  onClick={() => handleEdit(teacher)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  onClick={() => handleDelete(teacher.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
