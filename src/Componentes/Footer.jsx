import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// Importe seu CSS global onde os estilos do footer estarão
// (Vou sugerir os estilos para 'index.css' na próxima seção)

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="copyright-text">
        © 2024 Capivara TV. Criado para fins de estudo.
      </p>
      <p className="disclaimer-text">
        Este site não armazena nenhum arquivo em seu servidor. Todos os
        conteúdos são fornecidos por terceiros não afiliados.
      </p>
    </footer>
  );
}

export default Footer;