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
import {
  getDisciplinas,
  getProfessores,
  getProvaDisciplina,
  getProvasDoProfessor,
} from '../service';

export default function ProvasPorDisciplina() {
  const [disciplinasList, setDisciplinasList] = useState([]);
  const [disciplinaEscolhida, setDisciplinaEscolhida] = useState({});
  const [provas, setProvas] = useState([]);
  const [prova, setProva] = useState({});
  const history = useHistory();
  const periodos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    getDisciplinas()
      .then((res) => {
        setDisciplinasList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('algo de errado com o servidor');
      });
  }, []);

  function enviarProva(event) {
    event.preventDefault();
  }

  function selectDisciplina(type) {
    if (disciplinaEscolhida.disciplina !== '') {
      setDisciplinaEscolhida('');
    }
    setDisciplinaEscolhida({ ...disciplinaEscolhida, disciplina: type });
    let disciplinaEscolhidaObj = disciplinasList.find(
      (disciplina) => disciplina.nomeDisciplina === type,
    );
    console.log(disciplinaEscolhida);
    let id = disciplinaEscolhidaObj.id;
    console.log(id);
    getProvaDisciplina({ id }).then((res) => {
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
      <h1>Escolha a Disciplina</h1>

      {periodos.map((periodo) => {
        return (
          <BoxStyled open={true}>
            <summary>
              <p>{`${periodo} PERIODO`}</p>
              <p>👇🏽</p>
            </summary>
            {disciplinasList.map((disciplina) => {
              if (periodo === disciplina.periodoDisciplina) {
                return (
                  <CheckContainer
                    nome={disciplina.nomeDisciplina}
                    func={selectDisciplina}
                    prova={disciplinaEscolhida}
                    categoria={'disciplinas'}
                  ></CheckContainer>
                );
              }
              return '';
            })}
          </BoxStyled>
        );
      })}

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
