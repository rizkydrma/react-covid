import { React, PropTypes } from "libraries";
import "./mycard.css";

function getCountry(url) {
  const country = String(url).split("/");
  return country[5];
}

const MyCard = ({ data }) => {
  const url = data.confirmed.detail;
  return (
    <div className="card card--grey">
      <div className="card__item">
        <p className="card__value">{getCountry(url)}</p>
        <p className="card__key">Negara</p>
      </div>
      <div className="card__item">
        <p className="card__value">{data.confirmed.value}</p>
        <p className="card__key">Positif</p>
      </div>
      <div className="card__item">
        <p className="card__value">{data.recovered.value}</p>
        <p className="card__key">Sembuh</p>
      </div>
      <div className="card__item">
        <p className="card__value">{data.deaths.value}</p>
        <p className="card__key">Meninggal</p>
      </div>
    </div>
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
