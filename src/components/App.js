import React from "react";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";


function App() {
  const projects = [
    { id: 1, name:  'Reciplease', technologies:  ['Rails', 'Bootstrap CSS'] },
    { id: 2, name:  'Kibbles N Bitz', technologies:  ['React', 'Redux'] },
    { id: 3, name: 'Alienwares', technologies:  ['React', 'Redux', 'Rails'] }
  ];
  return (
    <div>
      <NavBar />
            <ProjectList projects={projects} />
    </div>
  );
}

export default App;
