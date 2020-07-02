import {
  React,
  useEffect,
  useDispatch,
  useSelector,
  useState,
  Fragment,
} from "libraries";
import Logo from "assets/images/img-logo.svg";
import Form from "components/atoms/MyForm";
import MyCard from "components/molecules/MyCard";
import Banner from "components/atoms/Banner";
import Footer from "components/atoms/Footer";
import { getData } from "modules/redux/actions/covidAction";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "libraries/asset.js";
import { Circle, SearchpageBanner, Container } from "./Searchpage";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const Searchpage = () => {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("indonesia");

  useEffect(() => {
    dispatch(getData(query));
  }, [dispatch, query]);

  const fetchData = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.searchInput.value);
    dispatch(getData(query));
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <Circle></Circle>
      <Container>
        <img src={Logo} alt="Logo" />

        <Form
          fetchData={fetchData}
          updateSearch={updateSearch}
          search={search}
        />
        <MyCard data={state.data} />
        <SearchpageBanner>
          {images.map((image, i) => (
            <Banner path={image} key={i} />
          ))}
        </SearchpageBanner>
        <Footer text="updated, source from " />
      </Container>
    </Fragment>
  );
};

export default Searchpage;
