import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <section className="about-me" id="aboutme">
            <div className="about-me__container">
                <div className="about-me__image">
                <img src={`${process.env.PUBLIC_URL}/img/avatar-github-frog.jpg`} alt="My avatar" />
                </div>
                <div className="about-me__content">
                    <h1 className="about-me__name">Александр Рудаков</h1>
                    <p className="about-me__details">Возраст: 19 лет, Санкт-Петербург</p>
                    <h2 className="about-me__role">Frontend-разработчик</h2>
                    <p className="about-me__description">
                        Привет! Я занимаюсь созданием современных и удобных веб-сайтов. Моя цель — делать интерфейсы, которые работают и приносят удовольствие пользователям.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
