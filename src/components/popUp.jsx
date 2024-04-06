import React from "react";
import "./popUp.css";
export const popUp = () => {
  return (
    <div>
      <div className="popUp">
        <h2> Lock Folder </h2>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="#pass"
        />
        <input
          type="password"
          placeholder="confirm password"
          name="password"
          id="#pass"
        />
        <button>confirm</button>
      </div>
    </div>
  );
};
