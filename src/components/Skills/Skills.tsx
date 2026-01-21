import './Skills.scss';

interface Skill {
    id: number;
    iconClass: string;
    name: string;
    description: string;
}

const skills: Skill[] = [
    {
        id: 1,
        iconClass: 'devicon-html5-plain colored',
        name: 'HTML5',
        description: 'Создание семантической разметки для веб-страниц.',
    },
    {
        id: 2,
        iconClass: 'devicon-css3-plain colored',
        name: 'CSS3',
        description: 'Стилизация веб-страниц с поддержкой Flexbox и Grid.',
    },
    {
        id: 3,
        iconClass: 'devicon-sass-original colored',
        name: 'Sass/SCSS',
        description:
            'Расширение возможностей CSS с использованием препроцессоров.',
    },
    {
        id: 4,
        iconClass: 'devicon-javascript-plain colored',
        name: 'JavaScript',
        description: 'Добавление интерактивности и логики на веб-сайты.',
    },
    {
        id: 5,
        iconClass: 'devicon-typescript-plain colored',
        name: 'TypeScript',
        description: 'Статическая типизация для повышения надёжности кода.',
    },
    {
        id: 6,
        iconClass: 'devicon-react-original colored',
        name: 'React',
        description: 'Создание современных SPA с использованием компонентов.',
    },
    {
        id: 7,
        iconClass: 'devicon-redux-original colored',
        name: 'Redux',
        description: 'Управление состоянием приложения с помощью хранилища.',
    },
    {
        id: 8,
        iconClass: 'devicon-vitejs-plain colored',
        name: 'Vite',
        description:
            'Быстрая сборка проектов на React, поддержка HMR и современного ES-модуля.',
    },
    {
        id: 9,
        iconClass: 'devicon-nodejs-plain colored',
        name: 'Node.js',
        description: 'Создание серверной логики на JavaScript.',
    },
    {
        id: 10,
        iconClass: 'devicon-express-original colored bg-radiant',
        name: 'Express',
        description: 'Создание API и маршрутов на Node.js.',
    },
    {
        id: 11,
        iconClass: 'devicon-mongodb-plain colored',
        name: 'MongoDB',
        description: 'Документо-ориентированная база данных NoSQL.',
    },
    {
        id: 12,
        iconClass: 'devicon-mongoose-original colored',
        name: 'Mongoose',
        description: 'Работа с MongoDB через схемы и модели.',
    },
    {
        id: 13,
        iconClass: 'devicon-git-plain colored',
        name: 'Git',
        description:
            'Система контроля версий для командной и индивидуальной работы.',
    },
    {
        id: 14,
        iconClass: 'devicon-github-original colored bg-radiant',
        name: 'GitHub',
        description: 'Хостинг кода и совместная разработка.',
    },
    {
        id: 15,
        iconClass: 'devicon-jest-plain colored',
        name: 'Jest',
        description: 'Тестирование JavaScript и React компонентов.',
    },
    {
        id: 16,
        iconClass: 'devicon-jest-plain colored',
        name: 'React Testing Library',
        description:
            'Тестирование React-компонентов с фокусом на пользовательское поведение.',
    },
    {
        id: 17,
        iconClass: 'devicon-nextjs-plain colored',
        name: 'Next.js',
        description:
            'React-фреймворк для SSR, SSG и создания полноценных веб-приложений.',
    },
    {
        id: 18,
        iconClass: 'devicon-jquery-plain colored',
        name: 'jQuery',
        description: 'Упрощение работы с DOM и событийной моделью.',
    },
    {
        id: 19,
        iconClass: 'rest-api',
        name: 'REST API',
        description:
            'Создание и использование HTTP-интерфейсов для обмена данными между клиентом и сервером.',
    },
];

const Skills = () => {
    return (
        <div className="skills">
            <h2 className="skills__header" id="skills">
                Навыки:
            </h2>
            <div className="skills-container">
                {skills.map((skill) => (
                    <div className="skills-card" key={skill.id}>
                        {skill.iconClass === 'rest-api' ? (
                            <img
                                src={`${process.env.PUBLIC_URL}/img/skills/rest-api-icon.png`}
                                alt={skill.name}
                                className="skills-icon bg-radiant"
                            />
                        ) : (
                            <i className={skill.iconClass}></i>
                        )}
                        <h3 className="skills-name">{skill.name}</h3>
                        <hr className="divider" />
                        <p className="skills-description">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
