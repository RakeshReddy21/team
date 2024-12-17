import React, { useState } from "react";
import "./resume.css";

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    linkedin: "",
    github: "",
    education: "",
    workExperience: "",
    skills: "",
    projects: [
      { title: "", url: "", description: "" },
    ],
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "", url: "", description: "" }],
    });
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="resume-container">
      <div className="form-section">
        <h2>Resume Builder</h2>
        <form>
          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
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

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Enter LinkedIn profile URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="github">GitHub</label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="Enter GitHub profile URL"
            />
          </div>

          <div className="form-group">
            <label htmlFor="education">Education</label>
            <textarea
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Enter your education details"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="workExperience">Work Experience</label>
            <textarea
              id="workExperience"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
              placeholder="Enter your work experience"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Enter your skills (comma-separated)"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Projects</label>
            {formData.projects.map((project, index) => (
              <div key={index} className="project-group">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) =>
                    handleProjectChange(index, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Project URL"
                  value={project.url}
                  onChange={(e) =>
                    handleProjectChange(index, "url", e.target.value)
                  }
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) =>
                    handleProjectChange(index, "description", e.target.value)
                  }
                ></textarea>
                <button type="button" onClick={() => handleDeleteProject(index)}>
                  Delete
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddProject}>
              Add More
            </button>
          </div>
        </form>
      </div>

      <div className="preview-section">
        <div className="preview-header">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile"
              className="profile-image"
            />
          )}
          <h2>{formData.name}</h2>
          <p>{formData.email}</p>
          <p>{formData.mobile}</p>
          <p>
            <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {" | "}
            <a href={formData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>

        <div className="preview-section-content">
          <h3>Education</h3>
          <p>{formData.education}</p>

          <h3>Work Experience</h3>
          <p>{formData.workExperience}</p>

          <h3>Skills</h3>
          <p>{formData.skills}</p>

          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <p>
                <strong>{project.title}</strong>
                {" "}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Link)
                </a>
              </p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;