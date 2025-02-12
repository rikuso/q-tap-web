import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const NavbarContainer = styled.nav`
  width: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: a space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
`;

const NavTitle = styled(motion.h1)`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem;
    align-items: center;
    gap: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #888;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Q-Tap Software
      </NavTitle>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={24} />
      </MenuButton>
      <NavList open={menuOpen}>
        <NavItem><Link to="/">Inicio</Link></NavItem>
        <NavItem><Link to="/services">Servicios</Link></NavItem>
        <NavItem><Link to="/about">Sobre Nosotros</Link></NavItem>
        <NavItem><Link to="/contact">Contacto</Link></NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
