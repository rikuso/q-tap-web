import { motion } from "framer-motion";
import styled from "styled-components";
import { Rocket, Eye, Lightbulb, CheckCircle, Wifi } from "lucide-react";
import imgservicios from "../assets/servicios1.jpg";

const Services = () => {
  return (
    <ServicesContainer>
      <ImageContainer>
        <StyledImage src={imgservicios} alt="Servicios de Q-Tap" />
      </ImageContainer>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nuestros Servicios
      </motion.h1>
      <StyledParagraph>
        En Q-Tap ofrecemos soluciones innovadoras para digitalizar, optimizar y hacer crecer tu negocio. Desde tecnología NFC hasta desarrollo web y estrategias de marketing, te brindamos herramientas para destacar en el mundo digital.
      </StyledParagraph>

      <ServicesSection>
        <ServiceCard>
          <IconWrapper>
            <Wifi size={40} color="#007bff" />
          </IconWrapper>
          <h2>Q-Tap NFC</h2>
          <p>
            Llaveros inteligentes con tecnología NFC para compartir información de contacto, redes sociales o pagos digitales de manera instantánea y sin contacto.
          </p>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <Rocket size={40} color="#ff5733" />
          </IconWrapper>
          <h2>Desarrollo Web</h2>
          <p>
            Creamos páginas web personalizadas y modernas para empresas y emprendedores, asegurando presencia digital y funcionalidad óptima.
          </p>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <Eye size={40} color="#28a745" />
          </IconWrapper>
          <h2>Marketing Digital</h2>
          <p>
            Estrategias digitales efectivas para redes sociales, publicidad y branding que aumentan la visibilidad y clientes potenciales.
          </p>
        </ServiceCard>
        <ServiceCard>
          <IconWrapper>
            <Lightbulb size={40} color="#ffcc00" />
          </IconWrapper>
          <h2>Impresión 3D</h2>
          <p>
            Fabricación de prototipos y piezas personalizadas en 3D para innovar y optimizar procesos en diversos sectores.
          </p>
        </ServiceCard>
      </ServicesSection>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
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

const ServicesSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ServiceCard = styled(motion.div)`
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

export default Services;
