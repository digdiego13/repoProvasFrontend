import styled from "styled-components";
import dayjs from "dayjs";

export default function DatesComponent({ date, type }) {
  console.log(date);

  function findNextDay() {
    console.log("finda");
    let nextDelivery = "";
    for (let i = 1; i < 8; i++) {
      if (dayjs().add(i, "day").day() === Number(date)) {
        nextDelivery = dayjs().add(i, "day");
        console.log(nextDelivery);
        break;
      }
    }
    return nextDelivery;
  }

  function isBetweenTodayAndEndMonth(d) {
    const isFuture = d.diff(dayjs(), "day") > 0;
    console.log(isFuture);
    const isThisMonth = dayjs().endOf("month").diff(d, "day") > 0;
    console.log(isThisMonth);
    if (isFuture && isThisMonth) {
      return true;
    } else {
      return false;
    }
  }

  function transformFormat(dayObject) {
    return dayObject.format("DD/MM/YYYY");
  }

  function nextDelivery() {
    const array = [];
    if (type === "Semanal") {
      const nextDay = findNextDay();
      console.log(nextDay);
      if (isBetweenTodayAndEndMonth(nextDay)) {
        array.push(transformFormat(nextDay));
        for (let i = 7; i < 31; i += 7) {
          const otherDays = nextDay.add(i, "day");
          if (isBetweenTodayAndEndMonth(otherDays)) {
            array.push(transformFormat(otherDays));
          }
        }
      }
    }

    if (type === "Mensal") {
      let deliveryDate = dayjs().date(date);
      const deliveryWeekDay = dayjs().date(date).day();
      if (deliveryWeekDay === 0) {
        deliveryDate = dayjs().date(date).add(1, "day");
      }
      if (deliveryWeekDay === 6) {
        deliveryDate = dayjs().date(date).add(2, "day");
      }
      if (isBetweenTodayAndEndMonth(deliveryDate)) {
        array.push(transformFormat(deliveryDate));
      }
    }
    console.log("Nao quebrou");
    return array;
  }

  return nextDelivery().map((day) => {
    return <DatasStyled>{day}</DatasStyled>;
  });
}

const DatasStyled = styled.p`
  color: red;
  margin-left: 20px;
`;
