import React from "react";

export default function Introduction({ formData, handleChange }) {
  return (
    <div>
      <h2>Introduction</h2>
      <form>
      <div>
            <label htmlFor="projects">Project 1</label>
            <input
              type="text"
              id="projects"
              name="projects"
              value={formData.projects}
              onChange={handleChange}
              placeholder="Enter Project Title"
            />
          </div>
          <br />
          <div>
            <label htmlFor="project">Project 2</label>
            <input type="text" id="project" name="project" value={formData.project} onChange={handleChange} placeholder="Enter Project Title" />
          </div>
          <br />
          <div>
            <label htmlFor="pro">Project 3</label>
            <input type="text" id="pro" name="pro" value={formData.pro} onChange={handleChange} placeholder="Enter Project Title" />
          </div>
          <br />
      </form>
    </div>
  );
}
