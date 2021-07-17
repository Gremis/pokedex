import styled from "styled-components";

export const DetailPageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPokemonDetails = styled.section`
  height: 80vh;
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 10vh 1fr;
  padding: 16px;
  justify-self: center;
  align-self: center;
  margin-top: 30px;
  border-radius: 30px;
  background-color: black;
  color: lightgray;
  h1 {
    grid-column: 1/3;
    color: white;
    text-decoration: underline;
    text-transform: uppercase;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 50vh;
    border-radius: 25px;
    border: 1px solid lightgray;
    padding-left: 16px;
    padding-right: 6px;
    margin-left: 32px;
  }
  aside {
    grid-column: 1;
  }
  strong {
    color: white;
  }
  h3 {
    color: white;
    align-self: center;
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.6rem;
    }
    div {
    min-height: 40vh;
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 2px;
    margin-left: 28px;
  }
  }
`;

export const PokemonImages = styled.section`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 30vh;
    width: 30vw;
  }
  @media (max-width: 800px) {
    img {
      height: 20vh;
      width: 20vw;
    }
  }
  @media (max-width: 500px) {
    img {
      height: 10vh;
      width: 10vw;
    }
  }
`;

export const Details = styled.section`
  overflow-y: auto;
  height: 55vh;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
    border: 3px solid lightgray;
  }
  @media (max-width: 800px) {
    height: 60vh;
    width: 15vw;
  }
  @media (max-width: 800px) {
    width: 10vw;
    font-size: 0.7rem;
  }
`;
