import React from "react";
import { useLocation } from "react-router-dom";

const Section = () => {
  return (
    <div className="row">
      <div className="col">
        <img
          alt="Code Image"
          src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
        />
      </div>
      <div className="col">
        <h3>Online Coding...</h3>
      </div>
    </div>
  );
};

export default Section;
