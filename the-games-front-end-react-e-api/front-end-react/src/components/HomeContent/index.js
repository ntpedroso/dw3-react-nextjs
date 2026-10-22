import{ useState, useEffect } from "react";
import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
import axios from "axios";

const HomeContent = () => {

  //o valor inicial é uma lista vazia
  const [games, setGames] = useState([]);

  //useEffect
  //aqui será criada a função para pegar os jogos da API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        setGames(response.data.games);
        console.log(response);
      } catch {
        console.log(error);
      }
    };
    //invocando a função dentro do useEffect
    fetchGames();
  });

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          {/* <Loading /> */}
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {games.map((game) => {
              <ul className={styles.listGames}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Capa do jogo" />
                </div>
                <div className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <li>Plataforma: {game.descriptions.platform} </li>
                  <li>Gênero: {game.descriptions.genre} </li>
                  <li>Classificação: {game.descriptions.rating} </li>
                  <li>Ano: {game.year} </li>
                  <li>Preço: {game.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })} </li>
                </div>
              </ul>
            } )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
