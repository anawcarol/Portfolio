import React from "react";
import Header from "../../components/header";
import { ApresentationSection, MainContainer, SkillsSection, CardSection, TecSection } from "./styled";
import { FaInstagram, FaGithub, FaLinkedinIn, FaPencilRuler, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiFlutter, SiFigma, SiC } from "react-icons/si";
import Button from "../../components/Button";
import CardSkills from "../../components/CardSkills";
import me from "../../assets/me.png";
import Tecnology from "../../components/Tecnology";

function Landingpage() {
  return (
    <MainContainer>
      <Header />
      <ApresentationSection>
        <section className="name">
          <h1 className="firstName">Ana Carolina</h1>
          <img src={me} alt="Ana Carolina" />
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
          <h1 className="software">
            Engenheiro de <br />
            Software pela <span>UnB</span>
          </h1>
          <p className="description">
            Soluções em engenharia de software e design para <br /> mobile e web devices.
          </p>

          <div className="button">
            <Button variant="outline">Baixar curriculo</Button>
            <Button>Entrar em contato</Button>
          </div>
        </section>
      </ApresentationSection>

      <SkillsSection>
        <h1 className="title">Sobre mim</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitasdfsdfsdfsddfsdhdfbsadjhfbasjhdbfjsbdfjsbdjbfjasbdjfbsadjhhbf Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quae exercitationem, minus possimus voluptas similique incidunt ipsa? Consequatur quod doloremque voluptatibus doloribus fuga quis vero, atque reprehenderit facilis fugit?
        </p>
      </SkillsSection>

      <CardSection>
        <CardSkills icon={<FaPencilRuler />}>Testeeeee </CardSkills>
        <CardSkills icon={<FaPencilRuler />}>Testeeeee </CardSkills>
        <CardSkills icon={<FaPencilRuler />}>Testeeeee </CardSkills>
      </CardSection>

      <TecSection>
        <Tecnology title="HTML" icon={<FaHtml5 className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="CSS" icon={<FaCss3Alt className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="JavaScript" icon={<SiJavascript className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="TypeScript" icon={<SiTypescript className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="Flutter" icon={<SiFlutter className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="Figma" icon={<SiFigma className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="React" icon={<FaReact className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="C" icon={<SiC className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
        <Tecnology title="Node.js" icon={<FaNodeJs className="icon" />} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id sodales est. Donec ac ligula nec lectus facilisis aliquet." />
      </TecSection>
    </MainContainer>
  );
}
export default Landingpage;