import React, { useState } from "react";
import "./resume.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Introduction from "./Assests/introduction";


function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    lastname: "",
    mobile: "",
    linkedin: "",
    github: "",
    education: "",
    profile: "",
    projects: "",
    project: "",
    pro: "",
    skills: "",
    inter:"",
    achive: ""
  });

  const [imagePreview, setImagePreview] = useState(null); // To store and preview the image
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Display image preview
      };
      reader.readAsDataURL(file); // Convert the image file to base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData, imagePreview }); // Save form data with image
    setFormData({
      name: "",
      lastname: "",
      email: "",
      mobile: "",
      linkedin: "",
      github: "",
      education: "",
      profile: "",
      projects: "",
      project: "",
      pro: "",
      skills: "",
      inter: "",
      achive: ""
    }); // Clear form fields
    setImagePreview(null); // Clear the image preview
  };

  return (
    <div className="content">
      <div className="inputs">
        <h2>Submit Your Details</h2>
        <div>
          <Router>
            <nav>
              <Link to='/intoduction'>Intoduction</Link> &nbsp;&nbsp;
              <Link>Education</Link> &nbsp;&nbsp;
              <Link>Projects</Link> &nbsp;&nbsp;
              <Link>Skills</Link> &nbsp;&nbsp;
              <Link>Achivements</Link>
            </nav>
            <Routes>
              <Route path="/introduction" element={<Introduction />}/>
            </Routes>
          </Router>
        </div>
        <br />
        <br />

        <form onSubmit={handleSubmit}>
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
              placeholder="Enter Linkedin url"
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
          <br />
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
          <div>
            <label htmlFor="skills">Technical Skills</label>
            <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter your technical skils" />
          </div>
          <br />
          <div>
            <label htmlFor="inter">Inter-Personal Skills</label>
            <input type="text" id="inter" name="inter" value={formData.inter} onChange={handleChange} placeholder="Enter your Interpersonal Skills"/>
          </div>
          <br />
          <div>
            <label htmlFor="achive">Acheviement</label>
            <input type="text" id="achive" name="achive" value={formData.achive} onChange={handleChange} placeholder="Mention your Achivements" />
          </div>

          <button type="submit">Submit</button>
          
        </form>
      </div>
      <div className="preview">
      {imagePreview && (
            <div>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
          )}
        {submittedData && (
          <div>
            {submittedData.imagePreview && (
              <div>
                
                <img
                  src={submittedData.imagePreview}
                  alt="Submitted"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </div>
            )}
            <div className="header">
              <p className="personname">
                <strong>Name:</strong> {submittedData.name}{" "}
                {submittedData.lastname}
              </p>
              <span>
                <strong>Email:</strong> {submittedData.email}
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <strong>Mobile No:</strong> {submittedData.mobile}
              </span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <strong>LinkedIn:</strong> {submittedData.linkedin}
              </span>&nbsp;&nbsp;
              <span className="git">
                <strong>GitHub:</strong> {submittedData.github}
              </span>
            </div>
            <p>
              <strong>Profile Summary</strong> <hr /> <br />
              {submittedData.profile}
            </p>
            <p>
              <strong>Education:</strong> <hr />{submittedData.education}
            </p>
            <p>
              <strong>Projects</strong> <br />
              <hr />
              {submittedData.projects}
              <br />
              <br />
              {submittedData.projects}
              <br />
              <br />
              {submittedData.pro}
            </p>
            <p>
              <strong>Technical Skills</strong><hr />
              {submittedData.skills}
            </p>
            <p>
              <strong>Interpersonal Skills</strong> <hr />
              {submittedData.inter}
            </p>
            <p>
              <strong>Achivements</strong> <hr />
              {submittedData.achive}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Form;