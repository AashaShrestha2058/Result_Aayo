"use client";

import React, { useState } from "react";

import Createnotice from "./Createnotice";

export default function Noticetable() {
  const [showCreateNotice, setShowCreateNotice] = useState(false);

  return (
    <div className="relative overflow-x-auto shadow-md ">
      <button
        onClick={() => setShowCreateNotice(true)}
        className="bg-[#8AA4D6] hover:bg-[#253553] hover:text-white text-gray-700 py-2 px-4 mt-4 rounded text-xs absolute top-4 right-4"
      >
        +Create Notice
      </button>

      {showCreateNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[101]">
          <Createnotice onClose={() => setShowCreateNotice(false)} />
        </div>
      )}

      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 mt-20"></div>
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
            <th scope="col">DATE CREATED</th>
            <th scope="col">TITLE</th>
            <th scope="col">PICTURE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <td className="px-6 py-4">supriya</td>
            <td className="px-6 py-4">Female</td>
            <td className="px-6 py-4">2002-12-23</td>

            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit{" "}
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Delete{" "}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
