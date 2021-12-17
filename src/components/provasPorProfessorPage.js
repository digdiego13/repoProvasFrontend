import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  GenericButtonStyled,
  CheckStuff,
  CheckIconStyled,
  LoginDataContainerStyled,
  BoxStyled,
} from '../shared/sharedStyles/sharedStyles';
import CheckContainer from '../shared/sharedComponents/checkStuff';
import { useHistory } from 'react-router';
import { getProfessores, getProvasDoProfessor } from '../service';

export default function ProvasPorProfessor() {
  const [professoresList, setProfessoresList] = useState([]);
  const [professorEscolhido, setProfessorEscolhido] = useState({});
  const [provas, setProvas] = useState([]);
  const [prova, setProva] = useState({});
  const history = useHistory();

  useEffect(() => {
    getProfessores()
      .then((res) => {
        setProfessoresList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('algo de errado com o servidor');
      });
  }, []);

  function enviarProva(event) {
    event.preventDefault();
  }

  function selectProfessor(type) {
    if (professorEscolhido.professor !== '') {
      setProfessorEscolhido('');
    }
    setProfessorEscolhido({ ...professorEscolhido, professor: type });
    let professorEscolhidoObj = professoresList.find(
      (professor) => professor.nomeProfessor === type,
    );
    console.log(professorEscolhido);
    let id = professorEscolhidoObj.id;
    console.log(id);
    getProvasDoProfessor({ id }).then((res) => {
      setProvas(res.data);
      console.log(res.data);
    });
  }

  function selectProva(type) {
    if (prova.nomeProva !== '') {
      setProva({ ...prova, nomeProva: '' });
    }
    setProva({ ...prova, nomeProva: type });
    console.log(provas);
  }

  return (
    <LoginDataContainerStyled onSubmit={enviarProva}>
      <h1>Escolha o professor</h1>
      <BoxStyled open={true}>
        <summary>
          <p>Professor</p>
          <p>👇🏽</p>
        </summary>
        {professoresList.length !== 0
          ? professoresList.map((professores) => {
              return (
                <CheckContainer
                  nome={professores.nomeProfessor}
                  func={selectProfessor}
                  prova={professorEscolhido}
                  categoria={'professores'}
                ></CheckContainer>
              );
            })
          : ''}
      </BoxStyled>

      <BoxStyled open={true}>
        <summary>
          <p>P1</p>
          <p>👇🏽</p>
        </summary>
        {provas.map((prov) => {
          if (prov.categoriasId === 1) {
            return (
              <CheckContainer
                link={prov.linkProva}
                nome={prov.nomeProva}
                func={selectProva}
                prova={prova}
                categoria={'prova'}
              ></CheckContainer>
            );
          }
          return '';
        })}
      </BoxStyled>
      <BoxStyled open={true}>
        <summary>
          <p>P2</p>
          <p>👇🏽</p>
        </summary>
        {provas.map((prov) => {
          if (prov.categoriasId === 2) {
            return (
              <CheckContainer
                link={prov.linkProva}
                nome={prov.nomeProva}
                func={selectProva}
                prova={prova}
                categoria={'prova'}
              ></CheckContainer>
            );
          }
          return '';
        })}
      </BoxStyled>
      <BoxStyled>
        <summary>
          <p>P3</p>
          <p>👇🏽</p>
        </summary>
        {provas.map((prov) => {
          if (prov.categoriasId === 3) {
            return (
              <CheckContainer
                link={prov.linkProva}
                nome={prov.nomeProva}
                func={selectProva}
                prova={prova}
                categoria={'prova'}
              ></CheckContainer>
            );
          }
          return '';
        })}
      </BoxStyled>
      <BoxStyled open={true}>
        <summary>
          <p>2ch</p>
          <p>👇🏽</p>
        </summary>
        {provas.map((prov) => {
          if (prov.categoriasId === 4) {
            return (
              <CheckContainer
                link={prov.linkProva}
                nome={prov.nomeProva}
                func={selectProva}
                prova={prova}
                categoria={'prova'}
              ></CheckContainer>
            );
          }
          return '';
        })}
      </BoxStyled>
      <BoxStyled open={true}>
        <summary>
          <p>Outros</p>
          <p>👇🏽</p>
        </summary>
        {provas.map((prov) => {
          if (prov.categoriasId === 5) {
            return (
              <CheckContainer
                link={prov.linkProva}
                nome={prov.nomeProva}
                func={selectProva}
                prova={prova}
                categoria={'prova'}
              ></CheckContainer>
            );
          }
          return '';
        })}
      </BoxStyled>
    </LoginDataContainerStyled>
  );
}
