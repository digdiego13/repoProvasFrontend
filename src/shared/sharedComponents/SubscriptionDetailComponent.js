import styled from "styled-components";
import { BiCheckCircle } from "react-icons/bi";

export default function SubscriptionDetailComponent({
  subscriptionDates,
  setSubscriptionDates,
  subscriptionType,
  setSubscriptionType,
  subscriptionItems,
  setSubscriptionItems,
}) {
  function selectType(type) {
    if (subscriptionType !== "") {
      setSubscriptionType("");
    }
    setSubscriptionType(() => type);
  }

  function selectDate(type) {
    if (subscriptionDates !== "") {
      setSubscriptionDates("");
    }
    setSubscriptionDates(() => type);
  }

  function selectItems(item) {
    if (subscriptionItems.includes(item)) {
      let aux = subscriptionItems.filter((elem) => item !== elem);
      setSubscriptionItems(aux);
    } else {
      setSubscriptionItems([...subscriptionItems, item]);
    }
  }

  return (
    <>
      <BoxStyled>
        <summary>
          <p>Plano</p>
          <p>👇🏽</p>
        </summary>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectType("Semanal")}
            checked={() => (subscriptionType === "Semanal" ? "green" : "")}
          ></CheckIconStyled>

          <p>Semanal</p>
        </CheckStuff>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectType("Mensal")}
            checked={() => (subscriptionType === "Mensal" ? "green" : "")}
          ></CheckIconStyled>
          <p>Mensal</p>
        </CheckStuff>
      </BoxStyled>
      <BoxStyled>
        <summary>
          <p>Entrega</p>
          <p>👇🏽</p>
        </summary>
        {subscriptionType === "Mensal" ? (
          <>
            <CheckStuff>
              <CheckIconStyled
                onClick={() => selectDate("01")}
                checked={() => (subscriptionDates === "01" ? "green" : "")}
              ></CheckIconStyled>
              <p>Dia 01</p>
            </CheckStuff>
            <CheckStuff>
              <CheckIconStyled
                onClick={() => selectDate("10")}
                checked={() => (subscriptionDates === "10" ? "green" : "")}
              ></CheckIconStyled>
              <p>Dia 10</p>
            </CheckStuff>
            <CheckStuff>
              <CheckIconStyled
                onClick={() => selectDate("20")}
                checked={() => (subscriptionDates === "20" ? "green" : "")}
              ></CheckIconStyled>
              <p>Dia 20</p>
            </CheckStuff>
          </>
        ) : (
          <>
            <CheckStuff>
              <CheckIconStyled
                onClick={() => selectDate("1")}
                checked={() => (subscriptionDates === "1" ? "green" : "")}
              ></CheckIconStyled>
              <p>Segunda</p>
            </CheckStuff>
            <CheckStuff>
              <CheckIconStyled
                onClick={() => selectDate("3")}
                checked={() => (subscriptionDates === "3" ? "green" : "")}
              ></CheckIconStyled>
              <p>Quarta</p>
            </CheckStuff>
            <CheckStuff>
              <CheckIconStyled
                onClick={() => selectDate("5")}
                checked={() => (subscriptionDates === "5" ? "green" : "")}
              ></CheckIconStyled>
              <p>Sexta</p>
            </CheckStuff>
          </>
        )}
      </BoxStyled>
      <BoxStyled>
        <summary>
          <p>Quero Receber</p>
          <p>👇🏽</p>
        </summary>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectItems("Chás")}
            checked={() => (subscriptionItems.includes("Chás") ? "green" : "")}
          ></CheckIconStyled>
          <p>Chás</p>
        </CheckStuff>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectItems("Incensos")}
            checked={() =>
              subscriptionItems.includes("Incensos") ? "green" : ""
            }
          ></CheckIconStyled>
          <p>Incensos</p>
        </CheckStuff>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectItems("Produtos organicos")}
            checked={() =>
              subscriptionItems.includes("Produtos organicos") ? "green" : ""
            }
          ></CheckIconStyled>
          <p>Produtos organicos</p>
        </CheckStuff>
      </BoxStyled>
    </>
  );
}

const BoxStyled = styled.details`
  width: 100%;
  background-color: #e0d1ed9e;
  color: #4d65a8;
  padding: 10px 10px;
  margin-bottom: 10px;

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    font-weight: 300;
  }
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
