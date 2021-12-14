import styled from "styled-components";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  SignUpOrLoginButtonStyled,
  SignUpOrLoginInputStyled,
  SwitchSignUpLoginLinkStyled,
} from "../shared/sharedStyles/sharedStyles";
import { postSignUp } from "../service";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function userSignUp(event) {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("A senhas inseridas não são as mesmas.");
      return;
    }
    const body = { email, password, username };
    setIsLoading(true);

    postSignUp(body)
      .then((response) => {
        setIsLoading(false);
        history.push("/sign-in");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 403) {
          alert("O e-mail inserido já está cadastrado.");
        } else if (err.response.status === 500) {
          alert("Erro de servidor");
        } else {
          alert(err.response.data);
        }
      });
  }

  return (
    <SignUpDataContainerStyled onSubmit={userSignUp}>
      <h1>Bem-vindo ao Gratibox</h1>
      <SignUpOrLoginInputStyled
        type="username"
        placeholder="Nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <SignUpOrLoginInputStyled
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <SignUpOrLoginInputStyled
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <SignUpOrLoginInputStyled
        type="password"
        placeholder="Confirmar senha"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />
      <SignUpOrLoginButtonStyled
        type="submit"
        disabled={isLoading ? true : false}
        back={"login"}
        color={"login"}
        width={"login"}
      >
        Cadastrar
      </SignUpOrLoginButtonStyled>
      <Link to={"/sign-in"} style={{ textDecoration: "none" }}>
        <SwitchSignUpLoginLinkStyled>
          Retornar ao Login
        </SwitchSignUpLoginLinkStyled>
      </Link>
    </SignUpDataContainerStyled>
  );
}

const SignUpDataContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
