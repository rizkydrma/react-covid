import { React, Link, useEffect, useDispatch, useSelector } from "libraries";
import Banner from "assets/images/banner.png";
import Button from "components/atoms/MyButton";
import MyCard from "components/molecules/MyCard";
import Footer from "components/atoms/Footer";
import { getData } from "modules/redux/actions/covidAction";
import {
  Container,
  HomepageBody,
  HomepageRight,
  HomepageLeft,
  Title,
  Subtitle,
  Image,
} from "./HomePage.js";

const Homepage = () => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("indonesia"));
  }, [dispatch]);

  return (
    <Container>
      <HomepageBody>
        <HomepageRight>
          <Image src={Banner} alt="Gambar Homepage" />
        </HomepageRight>
        <HomepageLeft>
          <Title>Selamatkan Dirimu Menyelamatkan Dunia.</Title>
          <Subtitle>
            penyakit coronavirus (Covid-19) adalah penyakit menular yang
            disebabkan oleh virus baru.
          </Subtitle>
          <Link to="/searchpage">
            <Button title="Check Other Country" />
          </Link>
        </HomepageLeft>
      </HomepageBody>
      <div className="homepage__footer">
        <MyCard data={state.data} />
        <Footer text="updated, source from" />
      </div>
    </Container>
  );
};

export default Homepage;
