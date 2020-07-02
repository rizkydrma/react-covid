import { Styled } from "libraries";

export const FormGroup = Styled.form`

`;

export const FormInput = Styled.input`
  border: none;
  text-decoration: none;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid #cc502f;

  &:focus {
    background-color: #cc502f;
    color: white;
    border: none;
    border-radius: 20px;
    outline: 0px;
  }

  @media screen and (min-width: 850px) {
      width: 300px;
  }
`;
