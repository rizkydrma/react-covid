import { React } from "libraries";
import Button from "components/atoms/MyButton";
import "./myform.css";

const MyForm = ({ fetchData, updateSearch, search }) => {
  const warning = (e) => {
    alert("please fill below first");
  };
  return (
    <form className="form" onSubmit={search ? fetchData : warning}>
      <input
        type="text"
        name="searchInput"
        className="form__input"
        placeholder="input country..."
        onChange={updateSearch}
        value={search}
      />
      <Button title="search" type="submit" />
    </form>
  );
};

export default MyForm;
