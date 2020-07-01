import { React, Link, useEffect, useDispatch, useSelector } from "libraries";
import Banner from "assets/images/banner.png";
import Button from "components/atoms/MyButton";
import MyCard from "components/molecules/MyCard";
import Footer from "components/atoms/Footer";
import { getData } from "modules/redux/actions/covidAction";

import "./homepage.css";

const Homepage = () => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("indonesia"));
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="homepage__body">
        <div className="homepage__right-content">
          <img src={Banner} className="homepage__image" alt="Gambar Homepage" />
        </div>
        <div className="homepage__left-content">
          <h1 className="homepage__title">
            Selamatkan Dirimu Menyelamatkan Dunia.
          </h1>
          <p className="homepage__subtitle">
            penyakit coronavirus (Covid-19) adalah penyakit menular yang
            disebabkan oleh virus baru.
          </p>
          <Link to="/searchpage">
            <Button title="Check Other Country" />
          </Link>
        </div>
      </div>
      <div className="homepage__footer">
        <MyCard data={state.data} />
        <Footer text="updated, source from" />
      </div>
    </div>
  );
};

export default Homepage;
