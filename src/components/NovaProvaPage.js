import imagemInicial from '../shared/images/logo.jpg';
import styled from 'styled-components';
import { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { GenericButtonStyled } from '../shared/sharedStyles/sharedStyles';

export default function NovaProvaPage() {
  const [prova, setProva] = useState({});

  function enviarProva(event) {
    event.preventDefault();
    console.log(prova);
  }

  function selectType(type) {
    if (prova.categoria !== '') {
      setProva({ ...prova, categoria: '' });
    }
    setProva({ ...prova, categoria: type });
  }
  function selectDisciplina(type) {
    if (prova.disciplina !== '') {
      setProva({ ...prova, disciplina: '' });
    }
    setProva({ ...prova, disciplina: type });
  }
  function selectProfessor(type) {
    if (prova.professor !== '') {
      setProva({ ...prova, professor: '' });
    }
    setProva({ ...prova, professor: type });
  }

  return (
    <LoginDataContainerStyled onSubmit={enviarProva}>
      <h1>Inserir Prova</h1>
      <SignUpOrLoginInputStyled
        type="Nomeprova"
        placeholder="Titulo da prova"
        value={prova.nome}
        onChange={(e) => setProva({ ...prova, nome: e.target.value })}
        required
      />
      <BoxStyled>
        <summary>
          <p>Categoria</p>
          <p>👇🏽</p>
        </summary>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectType('P1')}
            checked={() => (prova.categoria === 'P1' ? 'green' : '')}
          ></CheckIconStyled>
          <p>P1</p>
        </CheckStuff>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectType('P2')}
            checked={() => (prova.categoria === 'P2' ? 'green' : '')}
          ></CheckIconStyled>
          <p>P2</p>
        </CheckStuff>
      </BoxStyled>
      <BoxStyled>
        <summary>
          <p>Disciplina</p>
          <p>👇🏽</p>
        </summary>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectDisciplina('Calculo')}
            checked={() => (prova.disciplina === 'Calculo' ? 'green' : '')}
          ></CheckIconStyled>
          <p>Calculo</p>
        </CheckStuff>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectDisciplina('Fisica')}
            checked={() => (prova.disciplina === 'Fisica' ? 'green' : '')}
          ></CheckIconStyled>
          <p>Fisica</p>
        </CheckStuff>
      </BoxStyled>
      <BoxStyled>
        <summary>
          <p>Professor</p>
          <p>👇🏽</p>
        </summary>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectProfessor('Jhon')}
            checked={() => (prova.professor === 'Jhon' ? 'green' : '')}
          ></CheckIconStyled>
          <p>Jhon</p>
        </CheckStuff>
        <CheckStuff>
          <CheckIconStyled
            onClick={() => selectProfessor('Armando')}
            checked={() => (prova.professor === 'Armando' ? 'green' : '')}
          ></CheckIconStyled>
          <p>Armando</p>
        </CheckStuff>
      </BoxStyled>
      <SignUpOrLoginInputStyled
        type="linkProva"
        placeholder="Link da prova"
        value={prova.link}
        onChange={(e) => setProva({ ...prova, link: e.target.value })}
        required
      />
      <GenericButtonStyled type="submit">Enviar</GenericButtonStyled>
    </LoginDataContainerStyled>
  );
}

const LoginDataContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  width: 50%;
`;

const SignUpOrLoginInputStyled = styled.input`
  width: 100%;
  height: 65px;
  margin-bottom: 13px;
  background-color: #fff;
  border-radius: 6px;
  border: none;
  padding-left: 17px;
  font-family: 'Oswald', sans-serif;
  font-size: 27px;
  font-weight: 700;

  &::placeholder {
    color: #9f9f9f;
  }
`;

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
