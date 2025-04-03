import React from "react";
import Header from "../../components/header";
import { ApresentationSection, MainContainer, SkillsSection } from "./styled";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../../components/Button";
import { SiKia } from "react-icons/si";


function Landingpage() {
  return (
    <MainContainer>
      <Header />
      <ApresentationSection>
        <section className="name">
          <h1 className="firstName">Ana Carolina</h1>
          <h1 className="lastName">Fialho</h1>

          <div className="line" />

          <div className="icon">
            <FaInstagram />
            <FaLinkedinIn />
            <FaGithub />
            </div>


        </section>

        <section className="apresentation">
          <p className="welcome">Olá, Bem vindo!</p>
          <h1 className="software">Engenheiro de <br />Software pela <span>UnB</span></h1>
          <p className="description">Soluções em engenharia de software e design para <br /> mobile e web devices.</p>

          <div className="button">
          <Button>Baixar curriculo</Button>
          <Button>Entrar em contato</Button>
          </div>

        </section>

      </ApresentationSection>

      <SkillsSection>
      <section className="aboutme">
          <h1 className="title">Sobre mim</h1>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
          Donec euismod, nisl eget consectetur sagittis, nisl nunc <br />
          euismod nisi, euismod euismod nisi.</p>
        </section>



      </SkillsSection>

      
    </MainContainer>
  );
}

export default Landingpage;