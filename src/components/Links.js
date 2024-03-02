import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={'https://github.com/liza'}>{github}</a>
      <a href={'https://www.linkedin.com/in/liza'}>{linkedin}</a>
    </div>
  );
}

export default Links;
