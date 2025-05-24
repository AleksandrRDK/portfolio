import { useState } from 'react';
import './ProjectCard.scss';

interface Project {
    id: number;
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
    image: string;
}

const ProjectCard: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'PokeShere',
            description:
                'Pokeshere — это веб-приложение, посвященное миру покемонов. Оно позволяет искать, фильтровать, изучать эволюции покемонов и сравнивать их. Проект создан с использованием современных технологий и API для демонстрации навыков разработки.',
            githubLink:
                'https://github.com/AleksandrRDK/pokeshere?tab=readme-ov-file',
            liveLink: 'https://aleksandrrdk.github.io/pokeshere/',
            image: `${process.env.PUBLIC_URL}/img/project-card/card-avatar3.jpg`,
        },
        {
            id: 2,
            title: 'Small Business Dashboard',
            description:
                'Small Business Dashboard — это веб-приложение для управления данными малого бизнеса, которое предоставляет пользователям подробную аналитику и статистику по заказам и клиентам. С помощью этого проекта можно отслеживать количество заказов, анализировать повторные покупки, а также получать распределение клиентов и другие ключевые метрики.',
            githubLink:
                'https://github.com/AleksandrRDK/small_business_dashboard',
            liveLink:
                'https://aleksandrrdk.github.io/small_business_dashboard/',
            image: `${process.env.PUBLIC_URL}/img/project-card/card-avatar.jpg`,
        },
        {
            id: 3,
            title: 'To-Do List',
            description:
                'Это приложение для управления задачами, созданное с использованием React и Redux. Позволяет добавлять, редактировать, фильтровать и удалять задачи.',
            githubLink: 'https://github.com/AleksandrRDK/to-do_list',
            liveLink: 'https://aleksandrrdk.github.io/to-do_client/',
            image: `${process.env.PUBLIC_URL}/img/project-card/card-avatar2.jpg`,
        },
        {
            id: 4,
            title: 'Markdown Notes',
            description:
                'Markdown Notes — это веб-приложение для создания и управления заметками с поддержкой синтаксиса Markdown. Приложение позволяет пользователям записывать заметки, просматривать их в режиме предварительного просмотра, а также копировать форматированный текст в HTML для использования в других приложениях.',
            githubLink: 'https://github.com/AleksandrRDK/markdown-notes',
            liveLink: 'https://aleksandrrdk.github.io/markdown-notes/',
            image: `${process.env.PUBLIC_URL}/img/project-card/card-avatar3.jpg`,
        },
    ];

    const [flippedProject, setFlippedProject] = useState<number | null>(null);

    const handleFlip = (id: number) => {
        setFlippedProject(flippedProject === id ? null : id);
    };

    return (
        <section className="project">
            <h2 className="project__header" id="projects">
                Мои проекты:
            </h2>
            <div className="project-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card ${
                            flippedProject === project.id ? 'flipped' : ''
                        }`}
                    >
                        <div
                            className="project-card__front"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <h3>{project.title}</h3>
                            <button
                                className="info-icon"
                                onClick={() => handleFlip(project.id)}
                            >
                                I
                            </button>
                        </div>
                        <div className="project-card__back">
                            <button
                                className="info-icon"
                                onClick={() => handleFlip(project.id)}
                            >
                                I
                            </button>
                            <h3>{project.title}</h3>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Code (GitHub)
                            </a>
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectCard;
