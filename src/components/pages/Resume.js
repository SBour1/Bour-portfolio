import React from "react";
import resume from '../../images/Resume.pdf'


function Resume () {
  return (
    <div>
      <h1 className="text-center">Resume</h1>
      <a
        class="nav-link text-center"
        target="blank"
        href={resume}
        download
      >
        Resume
      </a>
    </div>
  );
}

export default Resume