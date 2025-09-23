import React from "react";
import userLogo from "../../../assets/3289576-individual-man-people-person_107097.png";
import flagLogo from "../../../assets/flag-black-rectangular-tool-symbol-on-a-pole_icon-icons.com_54533.png";
import { toast } from "react-toastify";

const AvailablePlayer = ({
  availablePlayer,
  availableBalance,
  setAvailableBalance,
  purchasePlayers,
  setPurchasePlayers,
}) => {
  // Check if this player is already selected
  const isSelected = purchasePlayers.some(
    (player) => player.id === availablePlayer.id
  );

  const handleBuyPlayer = (PlayerData) => {
    if (availableBalance < PlayerData.price) {
      toast.error("Insufficient Account Balance");
      return;
    }
    if (purchasePlayers.length >= 6) {
      toast.error("You can't purchase more than 6 players!");
      return;
    }
    // Check if player is already selected
    const isAlreadySelected = purchasePlayers.find(
      (player) => player.id === PlayerData.id
    );
    if (isAlreadySelected) {
      toast.error("Player already selected!");
      return;
    }
    setAvailableBalance(availableBalance - PlayerData.price);
    setPurchasePlayers([...purchasePlayers, PlayerData]);
    toast.success(`${PlayerData.playerName} added successfully!`);
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-60 rounded-lg bg-[#f3f7f8] object-contain"
          src={availablePlayer.playerImage}
          alt=""
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-3">
          <img className="w-6 h-6 rounded-full" src={userLogo} alt="" />
          <h2 className="card-title">{availablePlayer.playerName}</h2>
        </div>
        <div className="card-actions flex justify-between items-center border-b-2 pb-2 border-gray-200">
          <div className="flex justify-center items-center gap-1">
            <img
              className="w-6 h-5 rounded-full grayscale opacity-50"
              src={flagLogo}
              alt=""
            />
            <h2 className="text-gray-500 text-lg">
              {availablePlayer.playerCountry}
            </h2>
          </div>
          <button className="btn rounded-xl text-gray-500">
            {availablePlayer.playingRole}
          </button>
        </div>
        <p className="my-1 font-semibold">
          Rating:{" "}
          <span className="text-gray-500">{availablePlayer.rating}</span>
        </p>
        <div className="flex justify-between items-center font-semibold space-y-1">
          <h3>{availablePlayer.battingStyle}</h3>
          <h3 className="text-gray-400">{availablePlayer.bowlingStyle}</h3>
        </div>
        <div className="card-actions flex justify-between items-center font-semibold space-y-1">
          <h3>
            Price:{" "}
            <span className="text-gray-500">
              {availablePlayer.price} <span>USD</span>
            </span>
          </h3>
          <button
            disabled={isSelected}
            onClick={() => {
              handleBuyPlayer(availablePlayer);
            }}
            className="btn rounded-xl text-gray-500"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
