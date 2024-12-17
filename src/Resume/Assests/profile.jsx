import React from "react";

export default function Introduction({ formData, handleChange }) {
  return (
    <div>
      <h2>Introduction</h2>
      <form>
      <div>
            <label htmlFor="profile">Profile Summary</label>
            <textarea
              name="profile"
              id="profile"
              value={formData.profile}
              onChange={handleChange}
              placeholder="Profile Summary"
            />
          </div>
          <br />
          
          <div id="edu">
            <label htmlFor="education">Education</label>
            <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Enter the Education"
            />
          </div>
      </form>
    </div>
  );
}
