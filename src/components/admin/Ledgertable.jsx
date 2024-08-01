"use client";

import React, { useState } from "react";

export default function Ledgertable() {
  const [academicYear, setAcademicYear] = useState("");
  const [exam, setExam] = useState("");
  const [classSelected, setClassSelected] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (academicYear && exam && classSelected) {
      setShowTable(true);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <select
          value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}
          className="mr-2 p-2 border rounded"
        >
          <option value="">Select Academic Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="mr-2 p-2 border rounded"
        >
          <option value="">Select Exam</option>
          <option value="Midterm">Midterm</option>
          <option value="Final">Final</option>
        </select>
        <select
          value={classSelected}
          onChange={(e) => setClassSelected(e.target.value)}
          className="mr-2 p-2 border rounded"
        >
          <option value="">Select Class</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Generate Ledger
        </button>
      </form>

      {showTable && (
        <>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <img src="/school-logo.png" alt="School Logo" className="w-16 h-16" />
              <h2 className="text-2xl font-bold">School Name</h2>
              <p>School Address</p>
            </div>
            <p className="text-center font-semibold">{exam} Examination</p>
            <p className="text-center">Class: {classSelected}</p>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#8AA4D6] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Roll No</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">
                  Nepali
                  <div className="flex justify-between">
                    <span>TH</span>
                    <span>PR</span>
                    <span>Total</span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Math
                  <div className="flex justify-between">
                    <span>TH</span>
                    <span>PR</span>
                    <span>Total</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">
                  <div className="flex justify-between">
                    <span>70</span>
                    <span>20</span>
                    <span>90</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-between">
                    <span>75</span>
                    <span>15</span>
                    <span>90</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
