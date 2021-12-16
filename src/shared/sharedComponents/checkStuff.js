import { CheckIconStyled, CheckStuff } from '../sharedStyles/sharedStyles';

export default function CheckContainer({ nome, prova, func, categoria }) {
  return (
    <CheckStuff>
      <CheckIconStyled
        onClick={() => func(`${nome}`)}
        checked={() => {
          if (categoria === 'disciplinas') {
            return prova.disciplina === `${nome}` ? 'green' : '';
          }

          if (categoria === 'professores') {
            return prova.professor === `${nome}` ? 'green' : '';
          }
        }}
      ></CheckIconStyled>
      <p>{nome}</p>
    </CheckStuff>
  );
}
