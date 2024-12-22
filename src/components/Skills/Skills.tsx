import React from "react";
import "./Skills.scss";

interface Skill {
  id: number;
  iconClass: string;
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    id: 1,
    iconClass: "devicon-html5-plain colored",
    name: "HTML5",
    description: "Создание семантической разметки для веб-страниц.",
  },
  {
    id: 2,
    iconClass: "devicon-css3-plain colored",
    name: "CSS3",
    description: "Стилизация веб-страниц с поддержкой Flexbox и Grid.",
  },
  {
    id: 3,
    iconClass: "devicon-sass-original colored",
    name: "Sass/SCSS",
    description: "Расширение возможностей CSS с использованием препроцессоров.",
  },
  {
    id: 4,
    iconClass: "devicon-javascript-plain colored",
    name: "JavaScript",
    description: "Добавление интерактивности и логики на веб-сайты.",
  },
  {
    id: 5,
    iconClass: "devicon-react-original colored",
    name: "React",
    description: "Создание современных SPA с использованием компонентов.",
  },
  {
    id: 6,
    iconClass: "devicon-typescript-plain colored",
    name: "TypeScript",
    description: "Статическая типизация для повышения надежности кода.",
  },
  {
    id: 7,
    iconClass: "devicon-jquery-plain colored",
    name: "jQuery",
    description: "Упрощение работы с DOM и событийной моделью.",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills">
        <h2 className="skills__header" id="skills">Навыки:</h2>
        <div className="skills-container">
            {skills.map((skill) => (
                <div className="skills-card" key={skill.id}>
                <i className={skill.iconClass}></i>
                <h3 className="skills-name">{skill.name}</h3>
                <hr className="divider" />
                <p className="skills-description">{skill.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Skills;
