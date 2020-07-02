import { Styled } from "libraries";

export const Container = Styled.div`
  margin: 0.75rem 1.75rem;

  @media screen and (min-width: 850px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

export const HomepageBody = Styled.div`
  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const HomepageRight = Styled.div`
  text-align: center;
`;

export const HomepageLeft = Styled.div`
  text-align: center;

  @media screen and (min-width: 850px) {
    padding: 75px;
    max-width: 700px;
    display: grid;
    align-content: center;
    text-align: left;
  }
`;

export const Image = Styled.img`
  margin-top: 1rem;
  width: 70%;

  @media screen and (min-width: 850px) {
    width: 100%;
  }
`;

export const Title = Styled.div`
  font-size: 18pt;
  letter-spacing: 1px;
`;
export const Subtitle = Styled.div`
  margin: 0.75rem 0;
`;
