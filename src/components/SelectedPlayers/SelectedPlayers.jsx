import React from "react";
import SelectedPlayer from "./SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ purchasePlayers, removePlayer }) => {
  return (
    <div className="mt-2.5 max-w-[1320px] mx-auto grid grid-flow-row gap-6">
      {purchasePlayers.map((player) => (
        <SelectedPlayer
          key={player.id}
          player={player}
          removePlayer={removePlayer}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
