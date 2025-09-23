import React from "react";

const SelectedPlayer = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="list w-full xl:w-[1320px] bg-base-100 rounded-box shadow-md">
      <li className="list-row flex items-center gap-4 p-4">
        <div>
          <img
            className="w-16 h-16 rounded-box"
            src={player.playerImage}
            alt="Profile"
          />
        </div>
        <div>
          <h2 className="font-semibold text-xl">{player.playerName}</h2>
          <h3 className="text-gray-400">{player.playingRole}</h3>
          <h3 className="text-gray-400">
            {player.price} <span>USD</span>
          </h3>
        </div>
        <button
          onClick={handleRemove}
          className="btn btn-square btn-ghost ml-auto"
        >
          ✕
        </button>
      </li>
    </div>
  );
};

export default SelectedPlayer;
