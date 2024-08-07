// import React from "react";

// function Addstudent({ onClose }) {
//   return (
//     <div>
//       <div className="bg-white flex rounded-3xl shadow-2xl max-w-3xl p-3 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-3xl font-bold"
//         >
//           &times;
//         </button>

//         <div className="sm:w-1/2 px=15">
//           <div className="flex items-center mt-4">
//             <img
//               src="/assets/Addstudentorteacher.png"
//               className="h-12 w-12 mr-2"
//             />
//             <h1 className="text-[#253553] underline text-2xl font-bold">
//               ____A d d _ S t u d e n t
//             </h1>
//           </div>

//           <form className="flex-col gap-2">
//             <select
//               className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
//               placeholder="Joined Year "
//             >
//               <option value="2080">2080</option>
//               <option value="2081">2081</option>
//               <option value="2082">2082</option>
//             </select>

//             <select
//               className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
//               placeholder="   Class "
//             >
//               <option value="8">8</option>
//               <option value="9">9</option>
//               <option value="10">10</option>
//             </select>

//             <input
//               className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl "
//               type="text"
//               placeholder="     Full Name"
//             />
//             <input
//               className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
//               type="text"
//               placeholder="    Roll no "
//             />
//             <input
//               className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
//               type="text"
//               placeholder="  E-mail   "
//             />
//             <input
//               className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl "
//               type="text"
//               placeholder="   Parent's Name "
//             />
//             <input
//               className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl "
//               type="text"
//               placeholder="    Contact "
//             />
//             <input
//               className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
//               type="text"
//               placeholder="    Address "
//             />
//             <input
//               className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
//               type="Date"
//               placeholder="    Date of birth "
//             />

//             <br />
//             <select
//               className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl"
//               placeholder="    Gender "
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Others">Others</option>
//             </select>
//             <br />

//             <button className="text-white shadow-xl font-bold bg-[#8AA4D6] w-80 p-3 mt-10 rounded-xl hover:bg-[#253553] duration-300">
//               A D D
//             </button>
//           </form>
//         </div>

//         <div className="w-1/3">
//           <label for="photo-upload" class="cursor-pointer">
//             <div class="rounded-full overflow-hidden">
//               <img
//                 src="/assets/Importimage.png"
//                 alt="Teacher Photo"
//                 class="absolute inset-0 max-h-32 max-w-32 object-top mt-[8%] ml-[55%]"
//               />
//             </div>
//           </label>

//           <input type="file" id="photo-upload" class="hidden" />
//         </div>
//         <img className="rounded-3xl" src="/assets/popup.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default Addstudent;
"use client";

import React, { useState, useEffect } from "react";
import supabase from "@/utils/client";

function Addstudent({ onClose, student, selectedYear, selectedClass, onStudentAdded }) {
  const [fullName, setFullName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (student) {
      setFullName(student.Fullname);
      setRollNo(student.RollNo);
      setEmail(student.Email);
      setParentName(student.ParentName);
      setContact(student.Contact);
      setAddress(student.Address);
      setDob(student.DOB);
      setGender(student.Gender);
    }
  }, [student]);

  const handleImageUpload = async (file) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    let { data, error } = await supabase.storage
      .from("studentImage") // Adjust bucket name if necessary
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      return null;
    }

    const { publicURL } = supabase.storage
      .from("studentImage")
      .getPublicUrl(filePath);

    return publicURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !rollNo || !email || !dob || !gender) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    let imageUrl = null;
    if (photo) {
      imageUrl = await handleImageUpload(photo);
    }

    try {
      let data, error;
      if (student) {
        // Update existing student
        const { data: updateData, error: updateError } = await supabase
          .from('students')
          .update({
            Fullname: fullName,
            RollNo: rollNo,
            Email: email,
            ParentName: parentName,
            Contact: contact,
            Address: address,
            DOB: dob,
            Gender: gender,
            Year: selectedYear,
            Class: selectedClass,
            Image: imageUrl, // Save the uploaded image URL
          })
          .eq('id', student.id);

        data = updateData;
        error = updateError;
      } else {
        // Add new student
        const { data: insertData, error: insertError } = await supabase
          .from('students')
          .insert([
            {
              Fullname: fullName,
              RollNo: rollNo,
              Email: email,
              ParentName: parentName,
              Contact: contact,
              Address: address,
              DOB: dob,
              Gender: gender,
              Year: selectedYear,
              Class: selectedClass,
              Image: imageUrl, // Save the uploaded image URL
            },
          ]);

        data = insertData;
        error = insertError;
      }

      if (error) {
        setErrorMessage("Error saving student: " + error.message);
        console.error("Error saving student:", error.message);
      } else {
        setSuccessMessage("Student saved successfully!");
        onStudentAdded(); // Refresh the student list
        onClose(); // Close the modal after successful addition
      }
    } catch (error) {
      console.error("Unexpected error occurred:", error.message);
      setErrorMessage("Unexpected error occurred: " + error.message);
    }
  };

  return (
    <div className="bg-white flex rounded-3xl shadow-2xl max-w-3xl p-3 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-3xl font-bold"
      >
        &times;
      </button>

      <div className="sm:w-1/2 px-15">
        <div className="flex items-center mt-4">
          <img src="/assets/Addstudentorteacher.png" className="h-12 w-12 mr-2" />
          <h1 className="text-[#253553] underline text-2xl font-bold">
            Add Student
          </h1>
        </div>

        {successMessage && (
          <div className="text-green-600 text-center mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 text-center mb-4">
            {errorMessage}
          </div>
        )}

        <form className="flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="text"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="text"
            placeholder="Parent's Name"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
          />
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <select
            className="txt p-2 mt-6 w-80 rounded-xl border shadow-xl"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <button
            type="submit"
            className="text-white shadow-xl font-bold bg-[#8AA4D6] w-80 p-3 mt-10 rounded-xl hover:bg-[#253553] duration-300"
          >
            Add
          </button>
        </form>
      </div>

      <div className="w-1/3">
        <label htmlFor="photo-upload" className="cursor-pointer">
          <div className="rounded-full overflow-hidden">
            <img
              src={photo ? URL.createObjectURL(photo) : "/assets/Importimage.png"}
              alt="Student Photo"
              className="absolute inset-0 max-h-32 max-w-32 object-top mt-[8%] ml-[55%]"
            />
          </div>
        </label>
        <input
          type="file"
          id="photo-upload"
          className="hidden"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </div>
      <img className="rounded-3xl" src="/assets/popup.png" alt="" />
    </div>
  );
}

export default Addstudent;
