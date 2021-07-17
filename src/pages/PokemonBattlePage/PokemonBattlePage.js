import React, { useState, useEffect, useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  StyledPokemonDetails,
  PokemonImages,
  DetailPageContainer,
  Details,
} from "./Styled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const PokemonBattlePage = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);
  const [pokemon, setPokemon] = useState();
  const [rival, setRival] = useState();
  const pathParams = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/pokemon/${pathParams.name}`)
      .then((response) => {
        setPokemon(response.data);
        sortRival();
      })
      .catch((err) => {
        console.log("erro", err);
      });
  }, [pathParams]);

  const sortRival = () => {
    const index = randomIndex();
    let pokemonRival = pokemons[index];
    setRival(pokemonRival);
  };

  const randomIndex = () => {
    const max = 29;
    const min = 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const fight = (skill, value) => {
    let rivalSkill = rival.stats.filter((el) => el.stat.name === skill)[0]
      .base_stat;
    console.log(value, rivalSkill);
    if (value > rivalSkill) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Você Venceu!!!",
        showConfirmButton: false,
        timer: 800,
      });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Você Perdeu!!!",
        showConfirmButton: false,
        timer: 800,
      });
    }
  };

  return (
    <>
      <Header
        title={"Batalha Pokemon"}
        ControllerButtonMain={() => history.goBack()}
        ControllerButtonSecond
      />
      <DetailPageContainer>
        <StyledPokemonDetails>
          {pokemon && rival && (
            <>
              <div style={{ height: "500px" }}>
                <PokemonImages>
                  {pokemon.sprites.other.dream_world.front_default ? (
                    <img
                      src={pokemon.sprites.other.dream_world.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                    />
                  ) : (
                    <img
                      src={pokemon.sprites.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                    />
                  )}
                </PokemonImages>
                <h1>{pokemon.forms[0].name}</h1>
                <Details>
                  {pokemon.stats.map((stat) => {
                    return (
                      <p
                        key={stat.stat.name}
                        onClick={() => fight(stat.stat.name, stat.base_stat)}
                        style={{ cursor: "pointer" }}
                      >
                        <strong>{stat.stat.name}: </strong>
                        {stat.base_stat}
                      </p>
                    );
                  })}
                </Details>
              </div>
              <div
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {rival.sprites.other.dream_world.front_default ? (
                  <img
                    width="120px"
                    src={rival.sprites.other.dream_world.front_default}
                    alt={`imagem frontal do pokémon ${pathParams.name}`}
                    style={{ WebkitTransform: "scaleX(-1)" }}
                  />
                ) : (
                  <img
                    width="120px"
                    src={rival.sprites.front_default}
                    alt={`imagem frontal do pokémon ${pathParams.name}`}
                    style={{ WebkitTransform: "scaleX(-1)" }}
                  />
                )}
                {pokemon.sprites.other.dream_world.back_default ? (
                  <img
                    width="280px"
                    src={pokemon.sprites.other.dream_world.back_default}
                    alt={`imagem do ${pathParams.name} de costas`}
                    style={{ marginRight: "50%" }}
                  />
                ) : (
                  <img
                    width="280px"
                    src={pokemon.sprites.back_default}
                    alt={`imagem do ${pathParams.name} de costas`}
                    style={{ marginRight: "50%" }}
                  />
                )}
              </div>
              <div style={{ height: "500px" }}>
                <PokemonImages>
                  {rival.sprites.other.dream_world.front_default ? (
                    <img
                      src={rival.sprites.other.dream_world.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                      style={{ WebkitTransform: "scaleX(-1)" }}
                    />
                  ) : (
                    <img
                      src={rival.sprites.front_default}
                      alt={`imagem frontal do pokémon ${pathParams.name}`}
                      style={{ WebkitTransform: "scaleX(-1)" }}
                    />
                  )}
                </PokemonImages>
                <h1>{rival.forms[0].name}</h1>
              </div>
            </>
          )}
        </StyledPokemonDetails>
      </DetailPageContainer>
    </>
  );
};

export default PokemonBattlePage;
