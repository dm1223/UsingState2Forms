import React, { useState } from "react";

function UserForm() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  feedback: ""
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  console.log(`Updating ${name}:`, value);
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
 };

 return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>User Form</h1>
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      
      Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Feedback:
        <textarea
        
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
      </label>
      <input type="submit"></input>


    </form>
    <h2>Preview</h2>
    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
    <p>feedback: {formData.feedback}</p>
  </div>
 );

}



export default UserForm;