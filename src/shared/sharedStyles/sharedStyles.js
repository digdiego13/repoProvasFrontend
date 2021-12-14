import styled from "styled-components";

const GenericButtonStyled = styled.button`
  background-color: #8c97ea;
  margin-top: 35px;
  border: none;
  border-radius: 6px;
  margin-bottom: 13px;
  font-size: 24px;
  color: white;
  padding: 10px 25px;
  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;

const ContainerCenter = styled.div`
     display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: auto;
`

export {
    GenericButtonStyled,
    ContainerCenter
}

