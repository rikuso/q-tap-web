import { motion } from "framer-motion";
import styled from "styled-components";
import { Rocket, Eye, Lightbulb, CheckCircle } from "lucide-react";
import imgservicios from "../assets/servicios1.jpg";

const AboutUs = () => {
  return (
    <AboutContainer>
      <ImageContainer>
        <StyledImage src={imgservicios} alt="Equipo de Q-Tap" />
      </ImageContainer>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Serivicios 
      </motion.h1>
      <StyledParagraph>
        En Q-Tap ofrecemos soluciones innovadoras para digitalizar, optimizar y hacer crecer tu negocio. Desde tecnología NFC hasta desarrollo web y estrategias de marketing, te brindamos herramientas para destacar en el mundo digital.
      </StyledParagraph>
      
      <InfoSection>
        <AnimatedCard>
          <IconWrapper>
            <Rocket size={40} color="#007bff" />
          </IconWrapper>
          <h2>Nuestra Misión</h2>
          <p>
            Facilitar la digitalización de negocios con soluciones innovadoras, accesibles y efectivas, impulsando su crecimiento y posicionamiento en el mercado.
          </p>
        </AnimatedCard>
        <AnimatedCard>
          <IconWrapper>
            <Eye size={40} color="#ff5733" />
          </IconWrapper>
          <h2>Nuestra Visión</h2>
          <p>
            Convertirnos en un referente en tecnología NFC y soluciones digitales, ayudando a miles de emprendedores a conectar con más clientes de forma inteligente.
          </p>
        </AnimatedCard>
      </InfoSection>

      <ValuesSection>
        <h2>Nuestros Valores</h2>
        <ul>
          <li>
            <Lightbulb size={24} color="#ffcc00" /> <strong>Innovación:</strong> Siempre buscamos nuevas formas de mejorar y optimizar procesos.
          </li>
          <li>
            <CheckCircle size={24} color="#28a745" /> <strong>Compromiso:</strong> Nos enfocamos en brindar un servicio de calidad, adaptado a cada cliente.
          </li>
          <li>
            <CheckCircle size={24} color="#17a2b8" /> <strong>Simplicidad:</strong> Soluciones fáciles de usar, sin complicaciones innecesarias.
          </li>
          <li>
            <CheckCircle size={24} color="#dc3545" /> <strong>Cercanía:</strong> Creemos en el trato personalizado y en entender realmente lo que necesitas.
          </li>
        </ul>
      </ValuesSection>

      <ContactText>
        💬 ¿Te gustaría conocer más sobre cómo podemos ayudarte? ¡Contáctanos y hagamos crecer tu negocio juntos!
      </ContactText>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transformando ideas en realidad
      </motion.h2>

      <TwoColumns>
        <Column>
          <p>
            En la era digital en la que vivimos, tener una presencia en línea es esencial para cualquier empresa o negocio. Y para lograrlo, es necesario contar con un buen desarrollo de software que se adapte a las necesidades y objetivos de cada organización.
          </p>
        </Column>
        <Column>
          <p>
            Q-Tap se enfoca en la creación de soluciones innovadoras y de alta calidad para sus clientes, basándose en tecnología, creatividad y compromiso. La tecnología es el motor que impulsa a Q-Tap hacia el éxito.
          </p>
        </Column>
      </TwoColumns>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  text-align: center;
  padding: 8rem 2rem;
  background: #fff;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 1rem;
  line-height: 1.6;
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const AnimatedCard = styled(motion.div)`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;
  width: 320px;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const ValuesSection = styled.div`
  margin-top: 3rem;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ContactText = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;

const Column = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e3e3e3;
  }
`;

export default AboutUs;
