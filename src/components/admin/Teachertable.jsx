// import React from "react";

// export default function Teachertable() {
//   return (
//     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//       <button className="bg-[#8AA4D6] hover:bg-[#253553] hover:text-white text-gray-700 py-2 px-4 mt-4 rounded text-xs absolute top-4 right-4">
//         +Add Teacher
//       </button>

//       <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 mt-16"></div>
//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-[#8AA4D6] dark:bg-gray-700 dark:text-gray-400">
//           <tr className="[&>th]:px-3 [&>th]:py-3 [&>th]:pr-9 [&>th]:border-r-4 [&>th]:border-r-white last:[&>th]:border-r-0">
//             <th scope="col" className="p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-all-search"
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                 />
//                 <label htmlFor="checkbox-all-search" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </th>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">E-mail</th>
//             <th scope="col">Gender</th>
//             <th scope="col">DOB</th>
//             <th scope="col">Contact</th>
//             <th scope="col">Address</th>
//             <th scope="col">Username</th>
//             <th scope="col">Password</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//             <td className="w-4 p-4">
//               <div className="flex items-center">
//                 <input
//                   id="checkbox-table-search-1"
//                   type="checkbox"
//                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                 />
//                 <label htmlFor="checkbox-table-search-1" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </td>
//             <td className="px-6 py-4">1</td>
//             <th
//               scope="row"
//               className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
//             >
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src="vssvsd"
//                 alt=" image"
//               />
//               <div className="ps-3">
//                 <div className="text-base font-semibold">Supriya Shrestha</div>
//               </div>
//             </th>
//             <td className="px-6 py-4">supriyabicte@gmail.com</td>
//             <td className="px-6 py-4">Female</td>
//             <td className="px-6 py-4">2002-12-23</td>
//             <td className="px-6 py-4">9846776704</td>
//             <td className="px-6 py-4">supriyabicte@gmail.com</td>
//             <td className="px-6 py-4">supp</td>
//             <td className="px-6 py-4">supp</td>
//             <td className="px-6 py-4">
//               <a
//                 href="#"
//                 className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Edit{" "}
//               </a>
//               <a
//                 href="#"
//                 className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Delete{" "}
//               </a>
//             </td>
//           </tr>
//           {/* Repeat similar structure for other rows */}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// "use client" directive tells Next.js to treat this file as a Client Component
"use client";

import React, { useEffect, useState } from 'react';
import supabase from '@/utils/client'; // Adjust the path if needed

export default function Teachertable() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const { data, error } = await supabase
        .from('teachers') // Updated table name
        .select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setTeachers(data);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md ">
      <button className="bg-[#8AA4D6] hover:bg-[#253553] hover:text-white text-gray-700 py-2 px-4 mt-4 rounded text-xs absolute top-4 right-4">
        +Add Teacher
      </button>

      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 mt-16"></div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[#8AA4D6] dark:bg-gray-700 dark:text-gray-400">
          <tr className="[&>th]:px-3 [&>th]:py-3 [&>th]:pr-9 [&>th]:border-r-4 [&>th]:border-r-white last:[&>th]:border-r-0">
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col">ID</th>
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
            <tr key={teacher.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${teacher.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={`checkbox-table-search-${teacher.id}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">{teacher.id}</td>
              <td className="px-6 py-4">{teacher.name}</td>
              <td className="px-6 py-4">{teacher.email}</td>
              <td className="px-6 py-4">{teacher.gender}</td>
              <td className="px-6 py-4">{teacher.dob}</td>
              <td className="px-6 py-4">{teacher.contact}</td>
              <td className="px-6 py-4">{teacher.address}</td>
              <td className="px-6 py-4">{teacher.username}</td>
              <td className="px-6 py-4">{teacher.password}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
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

