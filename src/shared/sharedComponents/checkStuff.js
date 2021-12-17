import { CheckIconStyled, CheckStuff } from '../sharedStyles/sharedStyles';

export default function CheckContainer({ nome, prova, func, categoria, link }) {
  return (
    <CheckStuff>
      <CheckIconStyled
        onClick={() => {
          func(`${nome}`);
          if (categoria === 'prova') {
            window.location.replace(link);
          }
        }}
        checked={() => {
          if (categoria === 'disciplinas') {
            return prova.disciplina === `${nome}` ? 'green' : '';
          }

          if (categoria === 'professores') {
            return prova.professor === `${nome}` ? 'green' : '';
          }
          if (categoria === 'prova') {
            return prova.nomeProva === `${nome}` ? 'green' : '';
          }
        }}
      ></CheckIconStyled>
      <p>{nome}</p>
    </CheckStuff>
  );
}
