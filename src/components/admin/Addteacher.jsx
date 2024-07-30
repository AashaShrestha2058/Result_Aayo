import React from 'react'


 function Addteacher() {
  return (
    <div className="bg-gradient-to-r from-violet-100 to-indigo-400 min-h-screen flex items-center justify-center" >
     
     <div className="bg-white flex rounded-3xl shadow-2xl max-w-3xl p-3">
   <div className="sm:w-1/2 px=15">
   <img src="/assets/Addstudentorteacher.png" class="absolute  inset-0 max-h-12  max-w-12 object-top  mt-[8.5%] ml-[27.8%]" />
         <h1 className="text-[#253553] underline text-3xl font-bold flex items-center justify-left  mt-4"> ____A d d _ T e a c h e r</h1>
        
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
             placeholder="    Contact "/>
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
             
             <br/><select className="txt p-2 mt-6  w-80 rounded-xl border shadow-xl" 
              placeholder="    Gender ">
             
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Others">Others</option>
              </select>
       <br/>
        
           <button className="text-white shadow-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 w-80 p-3 mt-10 rounded-xl hover:scale-105 duration-300">A D D</button>
           </form>
           </div>
        
         
         <div className="w-1/3">
        
  <label for="photo-upload" class="cursor-pointer">
    <div class="rounded-full overflow-hidden">
      <img src="/assets/Importimage.png" alt="Teacher Photo" class="absolute  inset-0 max-h-32  max-w-32 object-top  mt-[8%] ml-[55%]" />
    </div>
  </label>
  
  
  <input type="file" id="photo-upload" class="hidden" />
</div>
             <img className="rounded-3xl" src="/assets/popup.png" alt=""/>
           </div> 
         
       </div>
       
    );

}
export default Addteacher;