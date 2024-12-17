import React from "react";
import { useNavigate } from "react-router-dom";

export default function Introduction({ formData, handleChange, handleImageChange }) {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/profile");
  };

  return (
    <div>
      <h2>Introduction</h2>
      <form>
        <div id="intro">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="name">First name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Firstname"
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your Lastname"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <br />
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Your mobile number"
          />
        </div>
        <br />
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="Enter Linkedin URL"
          />
        </div>
        <br />
        <div>
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="Enter GitHub URL"
          />
        </div>
        <br />
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}
