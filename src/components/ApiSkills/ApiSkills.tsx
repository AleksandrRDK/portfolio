import React from "react";
import "./ApiSkills.scss";

interface ApiSkill {
  id: number;
  icon: string;
  name: string;
  description: string;
}

const apiSkills: ApiSkill[] = [
  {
    id: 1,
    icon: "/img/api/firebase-logo.png",
    name: "Firebase",
    description: "Использовал для аутентификации, базы данных и хранилища.",
  },
  {
    id: 2,
    icon: "/img/api/marvel-logo.png",
    name: "Marvel API",
    description: "Получал данные о персонажах Marvel для отображения на сайте.",
  },
  {
    id: 3,
    icon: "/img/api/openweathermap-logo.png",
    name: "OpenWeatherMap",
    description: "Получал данные о погоде для отображения в приложениях.",
  },
  {
    id: 4,
    icon: "/img/api/restcountries-logo.png",
    name: "REST Countries",
    description: "Получал информацию о странах (флаг, название, код).",
  },
  {
    id: 5,
    icon: "/img/api/unsplash-logo.png",
    name: "Unsplash API",
    description: "Интегрировал изображения с платформы Unsplash.",
  },
  {
    id: 6,
    icon: "/img/api/google-maps-logo.png",
    name: "Google Maps API",
    description: "Использовал для отображения карт и построения маршрутов.",
  },
  {
    id: 7,
    icon: "/img/api/jokeapi-logo.png",
    name: "JokeAPI",
    description: "Получал шутки для демонстрации в проектах.",
  },
  {
    id: 8,
    icon: "/img/api/github-logo.png",
    name: "GitHub API",
    description: "Интегрировал информацию о репозиториях и пользователях с GitHub.",
  },
];

const ApiSkills: React.FC = () => {
  return (
    <div className="api-skills">
        <h2 className="api-skills__header" id="api">API:</h2>
        <div className="api-skills-container">
            {apiSkills.map((api) => (
                <div className="api-card" key={api.id}>
                <div className="api-icon"><img src={api.icon} alt={api.name} /></div>
                <h3 className="api-name">{api.name}</h3>
                <hr className="divider" />
                <p className="api-description">{api.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ApiSkills;
