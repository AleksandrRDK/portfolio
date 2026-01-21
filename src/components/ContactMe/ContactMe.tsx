import './ContactMe.scss';

const ContactMe = () => {
    return (
        <footer className="contact-me">
            <h2 className="contact-me__header" id="contact">
                Связаться со мной
            </h2>
            <p className="contact-me__description">
                Я всегда открыт для интересных проектов и сотрудничества!
                Свяжитесь со мной через одну из платформ ниже.
            </p>
            <div className="contact-me__links">
                <a
                    href="https://github.com/AleksandrRDK"
                    className="contact-me__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/api/github-logo.png`}
                        alt="GitHub"
                        className="contact-me__icon"
                    />
                    GitHub
                </a>
                <a
                    href="https://t.me/bc_Alexander"
                    className="contact-me__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/social/telegramm-icon.png`}
                        alt="Telegram"
                        className="contact-me__icon"
                    />
                    Telegram
                </a>
                <a
                    href="mailto:aleksandrrdk.code@gmail.com"
                    className="contact-me__link"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/social/email-icon.png`}
                        alt="Email"
                        className="contact-me__icon"
                    />
                    Электронная почта
                </a>
            </div>
        </footer>
    );
};

export default ContactMe;
