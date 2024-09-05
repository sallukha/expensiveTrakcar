import { useState } from "react";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "sallu",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { name: "ytjhyjhynh" } });
    console.log(game);
  };
  return (
    <div>
      <button onClick={handleClick}>click me </button>
    </div>
  );
};

export default Game;
