import { Styled } from "libraries";

export const Button = Styled.button`
border: none;
border-radius: 20px;
color: white;
padding: 10px 20px;
box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
cursor: pointer;

&:hover{
  background-color: #cc2f51;
}

&:focus{
  border: none;
  outline: 0px;
}

`;

export const ButtonPrimary = Styled(Button)`
background-color: #cc502f;
`;
