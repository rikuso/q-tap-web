import { motion } from "framer-motion";
import styled from "styled-components";
import { FaRocket, FaEye, FaLightbulb, FaHandshake } from "react-icons/fa";
import imgnosotros from "../assets/sobrenosotros.jpg";
const AboutUs = () => {
  return (
    <AboutContainer>
        <ImageContainer>
              <StyledImage src={imgnosotros} alt="Equipo de Q-Tap" />
            </ImageContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Quiénes Somos
      </motion.h1>
      <StyledParagraph>
        En Q-Tap, somos un equipo apasionado por la tecnología y la innovación, con la misión de ayudar a emprendedores y empresas a digitalizarse y crecer en el mundo digital.
      </StyledParagraph>
      <StyledParagraph>
        Nuestra experiencia en desarrollo web, impresión 3D y tecnología NFC nos permite ofrecer soluciones personalizadas y efectivas. Creemos en la simplicidad, la eficiencia y en brindar herramientas accesibles que realmente marquen la diferencia.
      </StyledParagraph>
      
      <InfoSection>
        <AnimatedCard>
          <FaRocket size={40} color="#ff6f61" />
          <h2>Nuestra Misión</h2>
          <p>Facilitar la digitalización de negocios con soluciones innovadoras, accesibles y efectivas, impulsando su crecimiento y posicionamiento en el mercado.</p>
        </AnimatedCard>
        <AnimatedCard>
          <FaEye size={40} color="#ff6f61" />
          <h2>Nuestra Visión</h2>
          <p>Convertirnos en un referente en tecnología NFC y soluciones digitales, ayudando a miles de emprendedores a conectar con más clientes de forma inteligente.</p>
        </AnimatedCard>
      </InfoSection>
      
      <ValuesSection>
        <h2><FaLightbulb size={30} color="#ff6f61" /> Nuestros Valores</h2>
        <ul>
          <li><strong>Innovación:</strong> Siempre buscamos nuevas formas de mejorar y optimizar procesos.</li>
          <li><strong>Compromiso:</strong> Nos enfocamos en brindar un servicio de calidad, adaptado a cada cliente.</li>
          <li><strong>Simplicidad:</strong> Soluciones fáciles de usar, sin complicaciones innecesarias.</li>
          <li><strong>Cercanía:</strong> Creemos en el trato personalizado y en entender realmente lo que necesitas.</li>
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
            En la era digital en la que vivimos, tener una presencia en línea es esencial para cualquier empresa o negocio. Y para lograrlo, es necesario contar con un buen desarrollo de software que se adapte a las necesidades y objetivos de cada organización. Es aquí donde Q-Tap entra en juego. Nos especializamos en el desarrollo de software personalizado, brindando soluciones innovadoras y de alta calidad para nuestros clientes.
          </p>
        </Column>
        <Column>
          <p>
            Q-Tap es una empresa de desarrollo de software que se enfoca en la creación de soluciones innovadoras y de alta calidad para sus clientes. Su enfoque se basa en tres pilares fundamentales: tecnología, creatividad y compromiso. En primer lugar, la tecnología es el motor que impulsa a Q-Tap hacia el éxito.
          </p>
        </Column>
      </TwoColumns>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  text-align: center;
  padding: 10rem 2rem;
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
  &:hover {
    transform: translateY(-5px);
  }
  h2 {
    margin-top: 1rem;
  }
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
