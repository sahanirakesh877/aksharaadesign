// import React from "react";

// const Enquiryform = () => {
//   return (
//     <>
//       <div className="container mx-auto mt-2 inq-form p-4">
//        <h4 className="text-center bg-success text-white py-2  ">
//           Enquiry Form
//         </h4>
//         <div className="row ">
//         {/* <h4 className="text-center bg-success text-white py-2  ">
//           Enquiry Form
//         </h4> */}
//           <div className="d-flex justify-content-center align-content-center flex-wrap gap-3">
//             <img src="/akasharalogo.png" alt="logo"  className="img-fluid"/>
//             <div className="mb-md-0 p-0 d-flex flex-column inquiry-text">
//               <span><i className="fas fa-location me-1 text-success "></i>Kageshwori Manohara - 9, Kathmandu, Nepal</span>
//               <span><i className="fas fa-phone me-1 text-success "></i>01-4993031/32/33 </span>
//               <span><i className="fas fa-message me-1 text-success "></i>info@aksharaaschool.edu.np </span>
//               <span><i className="fas fa-globe me-1 text-success "></i>www.aksharaaschool.edu.np</span>
//             </div>
//           </div>
//         </div>

//         <form className="px-4 ">
//           {/* Student Details */}
//           <div className="mb-1">
//             <h6 className="form-head position-relative mt-4">
//               Student Details : <span className="paralleogram"></span>
//             </h6>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text ">
//                     <i className="fas fa-user " />
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control text-decoration-none rounded-end-2"
//                     id="studentName"
//                     placeholder="Student Name"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-calendar-alt" />
//                   </span>
//                   <input
//                     type="number"
//                     className="form-control rounded-end-2"
//                     id="studentAge"
//                     placeholder="Student Age"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-venus-mars" />
//                   </span>
//                   <select className="form-select rounded-end-2" id="studentGender">
//                     <option selected disabled>
//                       Select Gender
//                     </option>
//                     <option>Male</option>
//                     <option>Female</option>
//                     <option>Other</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-graduation-cap" />
//                   </span>
//                   <select className="form-select rounded-end-2" id="studentGrade">
//                     <option selected disabled>
//                       Select Grade
//                     </option>
//                     <option>Grade 1</option>
//                     <option>Grade 2</option>
//                     <option>Grade 3</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3">
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="fas fa-home" />
//                 </span>
//                 <input
//                   type="text"
//                   className="form-control rounded-end-2"
//                   id="studentAddress"
//                   placeholder="Student Address"
//                 />
//               </div>
//             </div>
//           </div>
//           {/* Parent Details */}
//           <div className="mb-3">
//             <h6 className="form-head position-relative mt-4">
//               Student Details : <span className="paralleogram"></span>
//             </h6>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-user" />
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control rounded-end-2"
//                     id="parentName"
//                     placeholder="Parent Name"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-envelope" />
//                   </span>
//                   <input
//                     type="email"
//                     className="form-control rounded-end-2"
//                     id="parentEmail"
//                     placeholder="Parent Email"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-phone" />
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control rounded-end-2"
//                     id="parentPhone"
//                     placeholder="Parent Phone"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 mb-3">
//                 <div className="input-group">
//                   <span className="input-group-text">
//                     <i className="fas fa-briefcase" />
//                   </span>
//                   <input
//                     type="text"
//                     className="form-control rounded-end-2"
//                     id="parentOccupation"
//                     placeholder="Parent Occupation"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mb-1">
//               <div className="input-group">
//                 <span className="input-group-text">
//                   <i className="fas fa-home" />
//                 </span>
//                 <input
//                   type="text"
//                   className="form-control rounded-end-2"
//                   id="parentAddress"
//                   placeholder="Parent Address"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-3">
//             <div className="row">
//               <div className="col-md-6 ">
//                 <div className="input-group d-flex align-items-center gap-3">
//                   <span className="input-group-text ">
//                     <i className="fas fa-bus p-1" />
//                     Transportation
//                   </span>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="transportationOptions"
//                       id="transportationYes"
//                       value="yes"
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor="transportationYes"
//                     >
//                       <i className="fas fa-bus" /> Yes
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="transportationOptions"
//                       id="transportationNo"
//                       value="no"
//                     />
//                     <label
//                       className="form-check-label"
//                       htmlFor="transportationNo"
//                     >
//                       <i className="fas fa-times-circle" /> No
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <div className="input-group">
//                   <span className="input-group-text text-wrap">
//                     How do you come to know about us?
//                   </span>
//                   <select className="form-select rounded-end-2" id="studentGender">
//                     <option selected disabled>
//                       Websites
//                     </option>
//                     <option>Social Media </option>
//                     <option>Websites</option>
//                     <option>Facebook</option>
//                     <option>Friends or Suggest</option>
//                     <option>Self</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Transportation */}

//           {/* Submit Button */}
//           <button type="submit" className=" border-0 px-5 py-1 rounded-pill  text-white  submit-btn button-21">
//             <i className="fas fa-paper-plane" /> Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Enquiryform;

import React, { useState } from "react";

const Enquiryform = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    studentGender: "",
    studentGrade: "",
    studentAddress: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentOccupation: "",
    parentAddress: "",
    transportation: "",
    knowAboutUs: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto mt-2 inq-form p-4">
      <h4 className="text-center bg-success text-white py-2">Enquiry Form</h4>
      <div className="row">
        <div className="d-flex justify-content-center align-content-center flex-wrap gap-3">
          <img src="/akasharalogo.png" alt="logo" className="img-fluid" />
          <div className="mb-md-0 p-0 d-flex flex-column inquiry-text">
            <span>
              <i className="fas fa-location me-1 text-success"></i>Kageshwori
              Manohara - 9, Kathmandu, Nepal
            </span>
            <span>
              <i className="fas fa-phone me-1 text-success"></i>01-4993031/32/33
            </span>
            <span>
              <i className="fas fa-message me-1 text-success"></i>
              info@aksharaaschool.edu.np
            </span>
            <span>
              <i className="fas fa-globe me-1 text-success"></i>
              www.aksharaaschool.edu.np
            </span>
          </div>
        </div>
      </div>

      <form className="px-4" onSubmit={handleSubmit}>
        {/* Student Details */}
        <div className="mb-1">
          <h6 className="form-head position-relative mt-4">
            Student Details : <span className="paralleogram"></span>
          </h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control text-decoration-none rounded-end-2"
                  id="studentName"
                  placeholder="Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <input
                  type="number"
                  className="form-control rounded-end-2"
                  id="studentAge"
                  placeholder="Student Age"
                  value={formData.studentAge}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-venus-mars"></i>
                </span>
                <select
                  className="form-select rounded-end-2"
                  id="studentGender"
                  value={formData.studentGender}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-graduation-cap"></i>
                </span>
                <select
                  className="form-select rounded-end-2"
                  id="studentGrade"
                  value={formData.studentGrade}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Select Grade
                  </option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-home"></i>
              </span>
              <input
                type="text"
                className="form-control rounded-end-2"
                id="studentAddress"
                placeholder="Student Address"
                value={formData.studentAddress}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* Parent Details */}
        <div className="mb-3">
          <h6 className="form-head position-relative mt-4">
            Parent Details : <span className="paralleogram"></span>
          </h6>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-end-2"
                  id="parentName"
                  placeholder="Parent Name"
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  className="form-control rounded-end-2"
                  id="parentEmail"
                  placeholder="Parent Email"
                  value={formData.parentEmail}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-end-2"
                  id="parentPhone"
                  placeholder="Parent Phone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-briefcase"></i>
                </span>
                <input
                  type="text"
                  className="form-control rounded-end-2"
                  id="parentOccupation"
                  placeholder="Parent Occupation"
                  value={formData.parentOccupation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-1">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-home"></i>
              </span>
              <input
                type="text"
                className="form-control rounded-end-2"
                id="parentAddress"
                placeholder="Parent Address"
                value={formData.parentAddress}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group d-flex align-items-center gap-3">
                <span className="input-group-text">
                  <i className="fas fa-bus p-1"></i>Transportation
                </span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="transportation"
                    id="transportationYes"
                    value="yes"
                    checked={formData.transportation === "yes"}
                    onChange={handleRadioChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="transportationYes"
                  >
                    <i className="fas fa-bus"></i> Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="transportation"
                    id="transportationNo"
                    value="no"
                    checked={formData.transportation === "no"}
                    onChange={handleRadioChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="transportationNo"
                  >
                    <i className="fas fa-times-circle"></i> No
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text text-wrap">
                  How do you come to know about us?
                </span>
                <select
                  className="form-select rounded-end-2"
                  id="knowAboutUs"
                  value={formData.knowAboutUs}
                  onChange={handleChange}
                >
                  <option selected disabled>
                    Select an option
                  </option>
                  <option>Websites</option>
                  <option>Social Media</option>
                  <option>Facebook</option>
                  <option>Friends or Suggest</option>
                  <option>Self</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border-0 px-5 py-1 rounded-pill text-white submit-btn button-21"
        >
          <i className="fas fa-paper-plane"></i> Submit
        </button>
      </form>
    </div>
  );
};

export default Enquiryform;
