import React, { useState } from "react";
import "./resume.css";

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
    inter: "",
    achive: "",
  });

  const [imagePreview, setImagePreview] = useState(null); // To store and preview the image
  const [submittedData, setSubmittedData] = useState(null);
  const [activeSection, setActiveSection] = useState("introduction"); // Track active section

  // Array of section keys for navigation
  const sectionKeys = [
    "introduction",
    "profile",
    "projects",
    "skills",
    "achievements",
  ];

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
      achive: "",
    }); // Clear form fields
    setImagePreview(null); // Clear the image preview
  };

  const handleNext = () => {
    const currentIndex = sectionKeys.indexOf(activeSection);
    if (currentIndex < sectionKeys.length - 1) {
      setActiveSection(sectionKeys[currentIndex + 1]); // Navigate to the next section
    }
  };

  return (
    <div className="content">
      <div className="inputs">
        <h2>Submit Your Details</h2>
        <div className="navigation">
          {sectionKeys.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(section)}
              className={activeSection === section ? "active" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          {activeSection === "introduction" && (
            <div className="introduction">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <br />
              <br />
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Firstname"
              />
              <br />
              <br />
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your Lastname"
              />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <br />
              <br />
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
              <br />
              <br />
            </div>
          )}

          {activeSection === "profile" && (
            <div className="profile">
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="Enter LinkedIn URL"
              />
              <br />
              <br />
              <label htmlFor="github">GitHub</label>
              <input
                type="text"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="Enter GitHub URL"
              />
              <br />
              <br />
              <label htmlFor="profile">Profile Summary</label>
              <textarea
                name="profile"
                id="profile"
                value={formData.profile}
                onChange={handleChange}
                placeholder="Profile Summary"
              />
              <br />
              <br />
            </div>
          )}

          {activeSection === "projects" && (
            <div className="projects">
              <label htmlFor="projects">Project 1</label>
              <input
                type="text"
                id="projects"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                placeholder="Enter Project Title"
              />
              <br />
              <br />
              <label htmlFor="project">Project 2</label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Enter Project Title"
              />
              <br />
              <br />
              <label htmlFor="pro">Project 3</label>
              <input
                type="text"
                id="pro"
                name="pro"
                value={formData.pro}
                onChange={handleChange}
                placeholder="Enter Project Title"
              />
              <br />
              <br />
            </div>
          )}

          {activeSection === "skills" && (
            <div className="skills">
              <label htmlFor="skills">Technical Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Enter your technical skills"
              />
              <br />
              <br />
              <label htmlFor="inter">Interpersonal Skills</label>
              <input
                type="text"
                id="inter"
                name="inter"
                value={formData.inter}
                onChange={handleChange}
                placeholder="Enter your interpersonal skills"
              />
              <br />
              <br />
            </div>
          )}

          {activeSection === "achievements" && (
            <div className="achievements">
              <label htmlFor="achive">Achievements</label>
              <input
                type="text"
                id="achive"
                name="achive"
                value={formData.achive}
                onChange={handleChange}
                placeholder="Mention your achievements"
              />
              <br />
              <br />
            </div>
          )}

          {activeSection !== "achievements" && (
            <button className="next" type="button" onClick={handleNext}>
              Next
            </button>
          )}
          &nbsp;&nbsp;
          {activeSection === "achievements" && (
            <button type="submit">Submit</button>
          )}
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
              <p className="heading">
                <strong>Name:</strong> {submittedData.name}{" "}
                {submittedData.lastname}
              </p>
              <div className="side">
                <p>
                  <strong>Email:</strong> {submittedData.email}
                </p>
                <p>
                  <strong>Mobile:</strong> {submittedData.mobile}
                </p>
              </div>
              <div className="gits">
                <p>
                  <strong>LinkedIn:</strong> {submittedData.linkedin}
                </p>
                <p>
                  <strong>GitHub:</strong> {submittedData.github}
                </p>
              </div>
            </div>
            <p>
              <strong>Profile Summary:</strong>
              <hr /> {submittedData.profile}
            </p>
            <p>
              <strong>Projects:</strong>
              <hr /> {submittedData.projects} <br /> <br />{" "}
              {submittedData.project} <br />
              <br /> {submittedData.pro}
            </p>
            <p>
              <strong>Technical Skills:</strong>
              <hr /> {submittedData.skills}
            </p>
            <p>
              <strong>Interpersonal Skills:</strong> <hr />
              {submittedData.inter}
            </p>
            <p>
              <strong>Achievements:</strong> <hr />
              {submittedData.achive}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
