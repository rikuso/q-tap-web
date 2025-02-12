// Install required dependencies:
// npm install @emailjs/browser styled-components framer-motion

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, MapPin } from "lucide-react";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 12rem 2rem;
  
  @media (max-width: 768px) {
    padding: 10rem 1rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 1rem;
  line-height: 1.8;
  color: #444;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ContactCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Message = styled(motion.div)`
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
  background-color: ${props => props.success ? '#d4edda' : '#f8d7da'};
  color: ${props => props.success ? '#155724' : '#721c24'};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', success: false });
  
    try {
      const templateParams = {
        company_name: 'Q-TAP SOFTWARE',
        from_name: formData.name,
        phone : formData.phone,
        reply_to: formData.email,
        message: formData.message,
        company_address: 'INNOVACION',
        company_phone: '+57 311 623 1415'
      };
      
      await emailjs.send('service_ous09vl', 'template_bih40a8', templateParams, 'kx2-6AUD9zE3W7Emh');
  
      setStatus({
        submitting: false,
        message: '¡Gracias por su interés! Nos comunicaremos pronto.',
        success: true
      });
  
      // Clear form
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, intente nuevamente.',
        success: false
      });
    }
  };

  return (
    <FormContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contáctanos
      </motion.h1>
      <StyledParagraph>
        ¿Tienes alguna pregunta o quieres saber más sobre nuestros servicios? No dudes en ponerte en contacto con nosotros.
      </StyledParagraph>

      <ContactInfo>
        <ContactCard>
          <Phone size={30} color="#004aad" />
          <p>Teléfono: +57 123 456 7890</p>
        </ContactCard>
        <ContactCard>
          <MapPin size={30} color="#004aad" />
          <p>Ubicación: Manizales, Colombia</p>
        </ContactCard>
      </ContactInfo>

      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="phone">Teléfono Celular</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="+57 123 456 789"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Mensaje</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <Button
          type="submit"
          disabled={status.submitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>

        {status.message && (
          <Message
            success={status.success}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {status.message}
          </Message>
        )}
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;