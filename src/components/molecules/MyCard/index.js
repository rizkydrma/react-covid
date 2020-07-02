import { React, PropTypes } from "libraries";
import { CardGrey, CardItem, CardValue, CardKey } from "./MyCard";

function getCountry(url) {
  const country = String(url).split("/");
  return country[5];
}

const MyCard = ({ data }) => {
  const url = data.confirmed.detail;
  return (
    <CardGrey>
      <CardItem>
        <CardValue>{getCountry(url)}</CardValue>
        <CardKey>Negara</CardKey>
      </CardItem>
      <CardItem>
        <CardValue>{data.confirmed.value}</CardValue>
        <CardKey>Positif</CardKey>
      </CardItem>
      <CardItem>
        <CardValue>{data.recovered.value}</CardValue>
        <CardKey>Sembuh</CardKey>
      </CardItem>
      <CardItem>
        <CardValue>{data.deaths.value}</CardValue>
        <CardKey>Meninggal</CardKey>
      </CardItem>
    </CardGrey>
  );
};

MyCard.propTypes = {
  data: PropTypes.object,
};

MyCard.defaultProps = {
  data: {
    country: "Indonesia",
    positif: 54242,
    sembuh: 26477,
    meninggal: 2401,
  },
};

export default MyCard;
