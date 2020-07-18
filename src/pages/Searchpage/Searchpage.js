import { Styled } from "libraries";

export const Circle = Styled.div`
  position: absolute;
  width: 100vw;
  height: 400px;
  border-radius: 50%;
  background-color: #cc512f49;
  top: -30%;
  z-index: -2;
`;

export const Container = Styled.div`
  margin: 0.75rem 1.75rem;
  text-align: center;
  margin-top: 100px;
`;

export const SearchpageBanner = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 850px) {
      display: flex;
      justify-content: center;
}
`;
