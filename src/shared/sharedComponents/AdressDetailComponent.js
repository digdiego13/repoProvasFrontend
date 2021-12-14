import { useState } from "react";
import styled from "styled-components";

export default function AdressDetailComponent({
  adress,
  setAdress,
  city,
  setCity,
  cep,
  setCep,
  state,
  setState,
  name,
  setName,
}) {
  const [openDetail, setOpenDetail] = useState("");
  function selectState(s) {
    setOpenDetail(false);
    if (state !== "Estado") {
      setState("");
    }
    setState(() => s);
  }

  return (
    <form>
      <InputStyled
        type="text"
        placeholder="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></InputStyled>
      <InputStyled
        type="text"
        placeholder="Endereço de entrega"
        value={adress}
        onChange={(e) => setAdress(e.target.value)}
        required
      ></InputStyled>
      <InputStyled
        type="number"
        placeholder="CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        required
      ></InputStyled>
      <CityAndStateStyled>
        <InputStyled
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        ></InputStyled>
        <BoxStyled open={openDetail}>
          <summary onClick={() => setOpenDetail(true)}>
            <p>{state}</p>
            <p>👇🏽</p>
          </summary>
          <StateStyled
            onClick={() => selectState("RJ")}
            checked={() => (state === "RJ" ? "green" : "")}
          >
            RJ
          </StateStyled>
          <StateStyled
            onClick={() => selectState("SP")}
            checked={() => (state === "SP" ? "green" : "")}
          >
            SP
          </StateStyled>
          <StateStyled
            onClick={() => selectState("PR")}
            checked={() => (state === "PR" ? "green" : "")}
          >
            PR
          </StateStyled>
          <StateStyled
            onClick={() => selectState("CE")}
            checked={() => (state === "CE" ? "green" : "")}
          >
            CE
          </StateStyled>
        </BoxStyled>
      </CityAndStateStyled>
    </form>
  );
}

const InputStyled = styled.input`
  width: 100%;
  height: 65px;
  margin-bottom: 13px;
  background-color: #e0d1ed9e;
  border-radius: 6px;
  border: none;
  padding-left: 17px;
  font-size: 27px;
  font-weight: 700;

  &::placeholder {
    color: #4d65a8;
  }
`;

const CityAndStateStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxStyled = styled.details`
  width: 30%;
  background-color: #e0d1ed9e;
  color: #4d65a8;
  padding: 10px 10px;
  margin-bottom: 10px;
  margin-left: 10px;

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

const StateStyled = styled.div`
  color: ${(props) => props.checked};
`;
