import React from "react";
import { useNavigate } from "react-router-dom";

export default function Preview({ submittedData, resetForm }) {
  const navigate = useNavigate();

  if (!submittedData) return <p>No data submitted yet!</p>;

  return (
    <div>
      <h2>Preview</h2>
      {submittedData.imagePreview && (
        <img
          src={submittedData.imagePreview}
          alt="Submitted"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
      )}
      <div className="header">
        <p>
          <strong>Name:</strong> {submittedData.name} {submittedData.lastname}{" "}
          <button onClick={() => navigate("/introduction")}>Edit</button>
        </p>
        <p>
          <strong>Email:</strong> {submittedData.email}{" "}
          <button onClick={() => navigate("/introduction")}>Edit</button>
        </p>
        <p>
          <strong>Mobile:</strong> {submittedData.mobile}{" "}
          <button onClick={() => navigate("/introduction")}>Edit</button>
        </p>
        <p>
          <strong>LinkedIn:</strong> {submittedData.linkedin}{" "}
          <button onClick={() => navigate("/profile")}>Edit</button>
        </p>
        <p>
          <strong>GitHub:</strong> {submittedData.github}{" "}
          <button onClick={() => navigate("/profile")}>Edit</button>
        </p>
      </div>
      <p>
        <strong>Profile Summary:</strong> {submittedData.profile}{" "}
        <button onClick={() => navigate("/profile")}>Edit</button>
      </p>
      <p>
        <strong>Education:</strong> {submittedData.education}{" "}
        <button onClick={() => navigate("/profile")}>Edit</button>
      </p>
      <p>
        <strong>Projects:</strong> {submittedData.projects} <br />
        {submittedData.project} <br /> {submittedData.pro}{" "}
        <button onClick={() => navigate("/projects")}>Edit</button>
      </p>
      <p>
        <strong>Technical Skills:</strong> {submittedData.skills}{" "}
        <button onClick={() => navigate("/skills")}>Edit</button>
      </p>
      <p>
        <strong>Interpersonal Skills:</strong> {submittedData.inter}{" "}
        <button onClick={() => navigate("/skills")}>Edit</button>
      </p>
      <p>
        <strong>Achievements:</strong> {submittedData.achive}{" "}
        <button onClick={() => navigate("/achievements")}>Edit</button>
      </p>
      <button onClick={resetForm}>Reset Form</button>
    </div>
  );
}
