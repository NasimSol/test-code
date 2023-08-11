import React from "react";
import NavSection from "../Sections/Home/NavSection";
import styled from "styled-components";
import HeroSection from "../Sections/Home/MainSection";
import AboutSection from "../Sections/Home/AboutSection";
import CtaSection from "../Sections/Home/CtaSection";
import TestimonialSection from "../Sections/Home/TestimonialSection";
import FooterSection from "../Sections/Home/FooterSection";

const Container = styled.section`
  min-height: 100vh;
`;
const Home = () => {
  return (
    <>
      <Container>
        <NavSection />
        <HeroSection />
        <AboutSection />
        <CtaSection  />
        <TestimonialSection />
      </Container>
      <FooterSection />
    </>
  );
};

export default Home;
