import React from "react";
import "./ContactMe.scss";

const ContactMe: React.FC = () => {
    return (
        <section className="contact-me">
          <h2 className="contact-me__header" id="contact">Связаться со мной</h2>
          <p className="contact-me__description">
            Я всегда открыт для интересных проектов и сотрудничества! Свяжитесь со мной через одну из платформ ниже.
          </p>
          <div className="contact-me__links">
            <a
              href="https://github.com/your-github-profile"
              className="contact-me__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/api/github-logo.png" alt="GitHub" className="contact-me__icon" />
              GitHub
            </a>
            <a
              href="https://t.me/your-telegram-handle"
              className="contact-me__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/social/telegramm-icon.png" alt="Telegram" className="contact-me__icon" />
              Telegram
            </a>
            <a
              href="mailto:your-email@example.com"
              className="contact-me__link"
            >
              <img src="/img/social/email-icon.png" alt="Email" className="contact-me__icon" />
              Электронная почта
            </a>
          </div>
        </section>
    );
};

export default ContactMe;
