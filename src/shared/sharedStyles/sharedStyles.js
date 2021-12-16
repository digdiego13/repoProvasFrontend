import styled from 'styled-components';
import { BiCheckCircle } from 'react-icons/bi';

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
`;

const CheckStuff = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  button {
    background-color: none;
    border: none;
  }
`;

const CheckIconStyled = styled(BiCheckCircle)`
  font-size: 15px;
  height: 20px;
  width: 20px;
  color: ${(props) => props.checked};
`;

export { GenericButtonStyled, ContainerCenter, CheckIconStyled, CheckStuff };
