import React, { useState } from "react";

function ToggleContent() {
  // State to keep track of visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Button to toggle content */}
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {/* Conditional rendering of the content */}
      {isVisible && (
        <div>
          <h2>This is the toggled content!</h2>
          <p>You can show or hide me by clicking the button.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleContent;
