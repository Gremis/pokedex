import styled from "styled-components";

export const ContainerMain = styled.header`
  height: 10vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 1em 1em black;
  img {
    height: 27vh;
  }
`;

export const ControllerButtonOne = styled.button`
  position: absolute;
  left: 30px;
  background-color: transparent;
  color: lightgray;
  border: 1px solid gray;
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 0.8rem;
    left: 10px;
    height: 2rem;
    width: 5rem;
  }
`;

export const ControllerButtonTwo = styled.button`
  right: 10px;
  position: absolute;
  background-color: transparent;
  color: lightgray;
  border: 1px solid gray;
  height: 3rem;
  width: 10rem;
  font-size: 1rem;
  cursor: pointer;
  @media (max-width: 800px) {
    font-size: 0.8rem;
    height: 2rem;
    width: 5rem;
  }
`;

export const ContainerLogo = styled.header`
  background-color: black;
  height: 8vh;
  width: 15vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(209, 209, 209);
  font-weight: lighter;
  font-size: 0.6rem;
  margin: 0 auto;
  border-bottom-left-radius: 20rem;
  border-bottom-right-radius: 20rem;
  box-shadow: 9px 7px 5px #191919;
  h1 {
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    width: 10vw;
    h1 {
      display: none;
    }
  }
`;
