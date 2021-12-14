import {
  MensagesStyled,
  GenericButtonStyled,
  SwitchSignUpLoginLinkStyled,
} from "../shared/sharedStyles/sharedStyles";
import imagemInicial from "../shared/images/image05.webp";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container>
      <h1>Bem-vindo ao Gratibox</h1>
      <MensagesStyled>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </MensagesStyled>
      <img src={imagemInicial} alt={"imagem inicial"} width={`120%`}></img>
      <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
        <GenericButtonStyled>Quero Comecar</GenericButtonStyled>
      </Link>
      <Link to={"/sign-in"} style={{ textDecoration: "none" }}>
        <SwitchSignUpLoginLinkStyled>Ja sou Grato</SwitchSignUpLoginLinkStyled>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 0px -20px;
  }
`;
