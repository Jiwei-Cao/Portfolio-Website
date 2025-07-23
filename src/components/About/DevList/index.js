import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Git", progress: 100, className: "github-progress", years: 2 },
    { name: "Docker", progress: 50, className: "docker-progress", years: 1 },
    { name: "Amazon Web Services (AWS)", progress: 50, className: "aws-progress", years: 1 },
    { name: "Postman", progress: 25, className: "postman-progress", years: 0.5 },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;