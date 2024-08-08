import React from "react";

function Createexam({ onClose }) {
  return (
    <div>
      <div className="bg-white flex rounded-3xl shadow-2xl max-w-3xl p-3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-3xl font-bold"
        >
          &times;
        </button>

        <div className="sm:w-1/2 px=15">
          <div className="flex items-center mt-4">
            <img
              src="/assets/Addstudentorteacher.png"
              className="h-12 w-12 mr-2"
            />
            <h1 className="text-[#253553] underline text-2xl font-bold">
              Create Exam
            </h1>
          </div>

          <form className="flex-col gap-2 mt-6">
            <label htmlFor="resultDate" className="mt-4 p-3 block">
              Name:
            </label>
            <input
              className="txt p-2 rounded-xl border w-72 h-10 shadow-xl "
              type="text"
              id="examName"
              placeholder="Name"
            />

            <label htmlFor="resultDate" className="mt-4 p-3 block">
              Result Date:
            </label>
            <input
              className="txt p-2 rounded-xl w-72 h-10 border shadow-xl "
              type="date"
              id="resultDate"
              placeholder="Result Date"
            />

            <label htmlFor="resultTime" className="mt-4 p-3 block">
              Result Time:
            </label>
            <input
              className="txt p-2 rounded-xl w-72 h-10 border shadow-xl "
              type="time"
              id="resultTime"
              placeholder="Result Time"
            />

            <button className="text-white shadow-xl font-bold bg-[#8AA4D6] w-80 p-3 mt-10 rounded-xl hover:bg-[#253553] duration-300">
              A D D
            </button>
          </form>
        </div>

        <img className="rounded-3xl" src="/assets/popup.png" alt="" />
      </div>
    </div>
  );
}

export default Createexam;
