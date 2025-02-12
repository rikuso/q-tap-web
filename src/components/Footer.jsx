import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react"; // Asegúrate de tener estos iconos

const FooterContainer = styled.footer`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 2rem;
  text-align: center;
  position: relative;
  bottom: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  font-size: 1.8rem;
  color: #fff;
  transition: color 0.3s;
  
  &:hover {
    color: #aaa;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Q-Tap Software - Todos los derechos reservados</p>
      <SocialIcons>
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          whileHover={{ scale: 1.2 }}
        >
          <Facebook size={28} />
        </SocialIcon>
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          whileHover={{ scale: 1.2 }}
        >
          <Instagram size={28} />
        </SocialIcon>
        <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          whileHover={{ scale: 1.2 }}
        >
          <Linkedin size={28} />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
