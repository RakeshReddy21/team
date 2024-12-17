import React from "react";

export default function Introduction({ formData, handleChange }) {
  return (
    <div>
      <h2>Introduction</h2>
      <form>
      <div>
            <label htmlFor="achive">Acheviement</label>
            <input type="text" id="achive" name="achive" value={formData.achive} onChange={handleChange} placeholder="Mention your Achivements" />
          </div>
          <button type="submit">Submit</button>

      </form>
    </div>
  );
}
