import styled from "styled-components";

const SignUpOrLoginInputStyled = styled.input`
  width: 100%;
  height: 65px;
  margin-bottom: 13px;
  background-color: #fff;
  border-radius: 6px;
  border: none;
  padding-left: 17px;
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  font-weight: 700;

  &::placeholder {
    color: #9f9f9f;
  }
`;
const SignUpOrLoginButtonStyled = styled.button`
  background-color: #8c97ea;
  margin-top: 50px;
  height: 65px;
  border: none;
  border-radius: 6px;
  margin-bottom: 13px;
  width: 90%;
  font-size: 27px;
  font-weight: 700;
  color: white;
  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;
const SwitchSignUpLoginLinkStyled = styled.p`
  text-align: center;
  margin-top: 15px;
  color: white;
`;
const MensagesStyled = styled.p`
  flex-wrap: wrap;
  margin-bottom: 22px;
`;

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

const SubscriptionCardStyled = styled.div`
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4d65a8;
  background-color: #e5cdb3;
  padding: 0px 22px 24px 22px;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 220px;
    overflow: hidden;
  }
`;

const DetailCardStyled = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4d65a8;
  background-color: white;
  padding: 0px 22px 10px 22px;
  margin-bottom: 30px;
  font-weight: 700;
  img {
    width: 100%;
    height: 220px;
    overflow: hidden;
  }
`;

const ContainerCenterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  SignUpOrLoginButtonStyled,
  SignUpOrLoginInputStyled,
  SwitchSignUpLoginLinkStyled,
  MensagesStyled,
  GenericButtonStyled,
  SubscriptionCardStyled,
  DetailCardStyled,
  ContainerCenterStyled,
};
