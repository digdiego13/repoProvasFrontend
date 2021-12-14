import {
  GenericButtonStyled,
  MensagesStyled,
  DetailCardStyled,
  ContainerCenterStyled,
} from "../shared/sharedStyles/sharedStyles";
import detailImg from "../shared/images/image03.jpg";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { getSubscription } from "../service";
import styled from "styled-components";
import DatesComponent from "../shared/sharedComponents/DatesComponent";

export default function DetailsPage() {
  const { user } = useContext(UserContext);
  const [subscriptionInfo, setSubscriptInfo] = useState({});

  useEffect(() => {
    getSubscription(user.token)
      .then((res) => {
        setSubscriptInfo(res.data);
      })
      .catch((err) => {
        alert(err.response.status);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (Object.keys(subscriptionInfo).length === 0) {
    return "";
  }
  return (
    <ContainerCenterStyled>
      <h1>Bom te ver aqui, {user.name}</h1>
      <MensagesStyled>“Agradecer é arte de atrair coisas boas”</MensagesStyled>
      <DetailCardStyled>
        <img src={detailImg} alt={"detail img"}></img>
        <CardInfoStyled>
          <p>
            Plano: <ColorRedStyled>{subscriptionInfo.type}</ColorRedStyled>
          </p>
          <p>
            Data da assinatura{" "}
            <ColorRedStyled>{subscriptionInfo.subscriptionDate}</ColorRedStyled>
          </p>
          <p>Proximas entregas:</p>
          <DatesComponent
            date={subscriptionInfo.chosenDate}
            type={subscriptionInfo.type}
          ></DatesComponent>
        </CardInfoStyled>
        <ItemsStyled>
          {subscriptionInfo.items.map((item) => {
            return <p>{item}</p>;
          })}
        </ItemsStyled>
      </DetailCardStyled>
      <GenericButtonStyled
        onClick={() => alert("Futuramente voce podera avaliar")}
      >
        Avaliar entregas
      </GenericButtonStyled>
    </ContainerCenterStyled>
  );
}

const ColorRedStyled = styled.span`
  color: red;
`;

const CardInfoStyled = styled.div`
  width: 100%;
`;

const ItemsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: red;
  margin-top: 30px;

  p {
    font-weight: 300;
    margin-top: 5px;
  }
`;
