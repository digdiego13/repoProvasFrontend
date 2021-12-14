import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import UserContext from "../contexts/UserContext";
import {
  GenericButtonStyled,
  MensagesStyled,
  DetailCardStyled,
  ContainerCenterStyled,
} from "../shared/sharedStyles/sharedStyles";
import SubscriptionDetailComponent from "../shared/sharedComponents/SubscriptionDetailComponent";
import AdressDetailComponent from "../shared/sharedComponents/AdressDetailComponent";
import newSubsImg from "../shared/images/image03.jpg";
import { postSubscription, getSubscription } from "../service";

export default function NewSubscriptionPage() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [subscriptionType, setSubscriptionType] = useState("");
  const [subscriptionDates, setSubscriptionDates] = useState("");
  const [subscriptionItems, setSubscriptionItems] = useState("");
  const [adressAppear, setAdressAppear] = useState(false);
  const [adress, setAdress] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Estado");
  const [name, setName] = useState("");

  function changeDisplay() {
    if (
      subscriptionItems !== "" &&
      subscriptionType !== "" &&
      subscriptionDates !== ""
    ) {
      setAdressAppear(true);
    } else {
      alert("Preencha todos os campos");
    }
  }

  function finishBuy() {
    if (adress !== "" && city !== "" && state !== "Estado" && cep !== "") {
      const body = {
        subscriptionType,
        subscriptionDates,
        subscriptionItems,
        adress,
        cep,
        city,
        state,
      };
      console.log(body);
      postSubscription(user.token, body)
        .then((res) => {
          alert("Parabens, Gratiluz !");
          history.push("/details");
        })
        .catch((error) => {
          alert("Algo deu errado");
        });
    } else {
      alert("Preencha todos os campos");
    }
  }

  useEffect(() => {
    getSubscription(user.token)
      .then((res) => {
        Object.keys(res.data).length > 0
          ? history.push("/details")
          : console.log("ok");
      })
      .catch((err) => {
        alert(err.response.status);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerCenterStyled>
      <h1>Bom te ver aqui, {user.name}</h1>
      <MensagesStyled>“Agradecer é arte de atrair coisas boas”</MensagesStyled>
      <DetailCardStyled>
        <img src={newSubsImg} alt={"subs img"}></img>
        {adressAppear ? (
          <AdressDetailComponent
            adress={adress}
            setAdress={setAdress}
            cep={cep}
            setCep={setCep}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            name={name}
            setName={setName}
          ></AdressDetailComponent>
        ) : (
          <SubscriptionDetailComponent
            subscriptionItems={subscriptionItems}
            subscriptionDates={subscriptionDates}
            subscriptionType={subscriptionType}
            setSubscriptionDates={setSubscriptionDates}
            setSubscriptionItems={setSubscriptionItems}
            setSubscriptionType={setSubscriptionType}
          ></SubscriptionDetailComponent>
        )}
      </DetailCardStyled>
      {adressAppear ? (
        <GenericButtonStyled onClick={finishBuy}>
          Finalizar Compra
        </GenericButtonStyled>
      ) : (
        <GenericButtonStyled onClick={changeDisplay}>
          Continuar
        </GenericButtonStyled>
      )}
    </ContainerCenterStyled>
  );
}
