import React from "react";

function Addteacher({ onClose }) {
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
              ____A d d _ T e a c h e r
            </h1>
          </div>

          <form className="flex-col gap-2">
            <input
              className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl "
              type="text"
              placeholder="     Full Name"
            />
            <input
              className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
              type="text"
              placeholder="    email "
            />
            <input
              className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl "
              type="text"
              placeholder="    Contact "
            />
            <input
              className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
              type="text"
              placeholder="    Address "
            />
            <input
              className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
              type="Date"
              placeholder="    Date of birth "
            />

            <br />
            <select
              className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
              placeholder="    Gender "
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <br />

            <button className="text-white shadow-xl font-bold bg-[#8AA4D6] w-80 p-3 mt-10 rounded-xl hover:bg-[#253553] duration-300">
              A D D
            </button>
          </form>
        </div>

        <div className="w-1/3">
          <label for="photo-upload" class="cursor-pointer">
            <div class="rounded-full overflow-hidden">
              <img
                src="/assets/Importimage.png"
                alt="Teacher Photo"
                class="absolute inset-0 max-h-32 max-w-32 object-top mt-[8%] ml-[55%]"
              />
            </div>
          </label>

          <input type="file" id="photo-upload" class="hidden" />
        </div>
        <img className="rounded-3xl" src="/assets/popup.png" alt="" />
      </div>
    </div>
  );
}

export default Addteacher;
