import React from "react";
import Header from "../../components/header";
import { ApresentationSection, MainContainer } from "./styled";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "../../components/Button";


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
          <h1 className="software">Engenheiro de <br />Software pela UnB</h1>
          <p className="description">Soluções em engenharia de software e design para <br /> mobile e web devices.</p>

          <div className="button">
          <Button>Baixar curriculo</Button>
          <Button>Entrar em contato</Button>
          </div>
          


        </section>
      </ApresentationSection>
    </MainContainer>
  );
}

export default Landingpage;