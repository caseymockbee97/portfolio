import React from "react";
import Typography from "@mui/material/Typography";
import { projectsArr } from "../assets/descriptions";
import ProjectComponent from "../components/ProjectComponent";

export default function ProjectsView() {
  return (
    <>
      <Typography align="center" variant="h4" component="h2">
        About
      </Typography>
      {projectsArr.map((project) => (
        <ProjectComponent
          id={project.title}
          title={project.title}
          role={project.role}
          description={project.desc}
          live_URL={project.live_URL}
          github_URL={project.github_URL}
          tech_stack={project.techStack}
          img={project.img}
          disclaimer={project.disclaimer}
        />
      ))}
    </>
  );
}
