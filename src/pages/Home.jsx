import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { CheckCircle, Globe, Rocket, Smartphone} from "lucide-react";
import imgtrans from "../assets/Transformando_realidad.jpg";
import imgsoluciones from "../assets/soluciones.jpg";

// ...existing code...

const HomeContainer = styled.div`
  background-color: #ffffff;
  color: #000;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-family: 'Poppins', sans-serif;
`;


const Section = styled(motion.div)`
  max-width: 900px;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-top: 4rem;
`;

const TwoColumnSection = styled(motion.div)`
  display: flex;
  max-width: 1000px;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
`;

const Column = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const IconItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`;


const ToggleContent = ({ title, content, icon }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <Section>
      <Subtitle onClick={() => setShowContent(!showContent)} style={{ cursor: "pointer", color: "#000" }}>
        {icon} {title}
      </Subtitle>
      {showContent && <Text>{content}</Text>}
    </Section>
  );
};

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>

      
      <HomeContainer>
        <TwoColumnSection initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Column>
            <Title>Transformando ideas en realidad</Title>
            <Text>
              Q-Tap Software es una empresa especializada en el desarrollo de software a medida para empresas y emprendedores. Aplicamos tecnologías de vanguardia para crear soluciones innovadoras y eficientes, impulsando el crecimiento digital de nuestros clientes.
            </Text>
            
          </Column>
          <Column>
            <img src={imgtrans} alt="Imagen principal" style={{ width: "100%", borderRadius: "10px" }} />
        </Column>
        </TwoColumnSection>

        <TwoColumnSection>
          <Column>
            <Title>Q-Tap: Llaveros NFC inteligentes </Title>
          </Column>
          <Column>
            <Text>
              Nuestros llaveros NFC <strong>Q-Tap</strong> permiten a las empresas conectar sus productos y servicios con clientes de manera innovadora. Con solo un toque, puedes compartir información, enlaces y contenido digital.
            </Text>
            <IconList>
              <IconItem><CheckCircle size={20} /> Tecnología NFC avanzada</IconItem>
              <IconItem><CheckCircle size={20} /> Personalización con marca y enlaces</IconItem>
              <IconItem><CheckCircle size={20} /> Interacción instantánea con dispositivos móviles</IconItem>
            </IconList>
          </Column>
        </TwoColumnSection>

        <Section>
          <Title>Soluciones digitales innovadoras</Title>
          <Text>
            Q-Tap Software es una empresa especializada en el desarrollo de software a medida, enfocada en crear soluciones innovadoras que optimizan la eficiencia y productividad de su negocio.
          </Text>
          <Column>
            <img src={imgsoluciones} alt="Imagen principal" style={{ width: "100%", borderRadius: "10px" }} />
        </Column>
        </Section>

        <ToggleContent title="1. Diseño web personalizado" content="Creamos sitios web únicos y adaptados a cada empresa." icon={<Globe size={20} />} />
        <ToggleContent title="2. Consultoría tecnológica empresarial" content="Ofrecemos consultoría para empresas que buscan digitalizarse." icon={<Rocket size={20} />} />
        <ToggleContent title="3. Desarrollo de aplicaciones móviles" content="Diseñamos y desarrollamos apps personalizadas." icon={<Smartphone size={20} />} />
      </HomeContainer>

    </>
  );
};

export default Home;
