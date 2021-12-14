
import LogoComponent from "../shared/sharedComponents/LogoComponent";
import styled from "styled-components";
import { GenericButtonStyled, ContainerCenter } from "../shared/sharedStyles/sharedStyles";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    
    <ContainerCenter>
      <LogoComponent width={'200px'}></LogoComponent>
      <FlexStyle>
        <Link to={'/inserirprova'}><GenericButtonStyled>Inserir Prova</GenericButtonStyled></Link>
        <Link to={'/inserirprova'}><GenericButtonStyled>Todas as Provas</GenericButtonStyled></Link>
      </FlexStyle>
      </ContainerCenter>
  );
}

const FlexStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-top: 100px;

`

