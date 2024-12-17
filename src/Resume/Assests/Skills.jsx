import React from "react";

export default function Introduction({ formData, handleChange }) {
  return (
    <div>
      <h2>Introduction</h2>
      <form>
      <div>
            <label htmlFor="skills">Technical Skills</label>
            <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter your technical skils" />
          </div>
          <br />
          <div>
            <label htmlFor="inter">Inter-Personal Skills</label>
            <input type="text" id="inter" name="inter" value={formData.inter} onChange={handleChange} placeholder="Enter your Interpersonal Skills"/>
          </div>
      </form>
    </div>
  );
}
