import './AboutMe.scss';

const AboutMe = () => {
    return (
        <section className="about-me" id="aboutme">
            <div className="about-me__container">
                <div className="about-me__image">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/avatar-github-frog.jpg`}
                        alt="My avatar"
                    />
                </div>
                <div className="about-me__content">
                    <h1 className="about-me__name">Александр Рудаков</h1>
                    <p className="about-me__details">
                        Возраст: 20 лет, Санкт-Петербург
                    </p>
                    <h2 className="about-me__role">Frontend-разработчик</h2>
                    <p className="about-me__description">
                        Привет! Я увлечён созданием удобных, современных
                        веб-приложений. Работал с React, TypeScript, а так же
                        активно развиваюсь в бэкенде и уже изучил Node.js,
                        Express и MongoDB.
                        <br />
                        <br />
                        Мне нравится делать проекты с логикой, подключением API
                        и сохранением данных. Постоянно прокачиваюсь, чтобы
                        стать сильным разработчиком
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
