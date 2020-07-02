import { Styled } from "libraries";

export const Card = Styled.div`
  margin: 1rem 0.75rem;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px 3px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;

  @media screen and (min-width: 600px) {
    display: flex;
    margin: 1rem 7rem;
  }
`;

export const CardGrey = Styled(Card)`
  background-color: #f5f5f5;
`;

export const CardItem = Styled.div`
  text-align: center;
  margin: 10px 0;

  @media screen and (min-width: 800px){
    flex-grow: 1;
  }
`;

export const CardValue = Styled.div`
  font-size: 16pt;
  font-weight: bold;
  color: #bb2700;
`;

export const CardKey = Styled.div`
  
`;
