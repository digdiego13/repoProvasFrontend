import imagemInicial from "../images/logo.jpg";
import styled from "styled-components";

export default function LogoComponent({width}) {
    return (
        <LogoStyle src={imagemInicial} alt={"imagem inicial"} width={`${width}`}></LogoStyle>
    )
}

const LogoStyle = styled.img`
    border-radius: 50%
`