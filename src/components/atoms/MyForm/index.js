import { React } from "libraries";
import Button from "components/atoms/MyButton";
import { FormGroup, FormInput } from "./MyForm";

const MyForm = ({ fetchData, updateSearch, search }) => {
  const warning = () => {
    alert("please fill below first");
  };
  return (
    <FormGroup onSubmit={search ? fetchData : warning}>
      <FormInput
        type="text"
        name="searchInput"
        placeholder="input country..."
        onChange={updateSearch}
        value={search}
      />
      <Button title="search" type="submit" />
    </FormGroup>
  );
};

export default MyForm;
