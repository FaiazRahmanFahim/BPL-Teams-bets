import React, { use } from "react";
import AvailablePlayer from "./AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  availablePlayersPromise,
  availableBalance,
  setAvailableBalance,
  purchasePlayers,
  setPurchasePlayers,
}) => {
  const availablePlayers = use(availablePlayersPromise);
  //console.log(availablePlayers);

  return (
    <>
      <div className="mt-2.5 max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {availablePlayers.map((availablePlayer) => (
          <AvailablePlayer
            key={availablePlayer.id}
            availablePlayer={availablePlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></AvailablePlayer>
        ))}
        {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img
              className="rounded-lg"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="mt-4">
            <div className="flex gap-3">
              <img className="w-6 h-6 rounded-full" src={userLogo} alt="" />
              <h2 className="card-title">Viral Kohli</h2>
            </div>
            <div className="card-actions flex justify-between items-center border-b-2 pb-2 border-gray-200">
              <div className="flex justify-center items-center gap-1">
                <img
                  className="w-6 h-5 rounded-full grayscale opacity-50"
                  src={flagLogo}
                  alt=""
                />
                <h2 className="text-gray-500 text-lg">India</h2>
              </div>
              <button className="btn rounded-xl text-gray-500">
                All-Rounder
              </button>
            </div>
            <p className="my-1 font-semibold">
              Rating: <span>5</span>
            </p>
            <div className="flex justify-between items-center font-semibold space-y-1">
              <h3>Left-Hand-Bat</h3>
              <h3 className="text-gray-400">Left-Hand-Bat</h3>
            </div>
            <div className="card-actions flex justify-between items-center font-semibold space-y-1">
              <h3>Price: $1500000</h3>
              <button className="btn rounded-xl text-gray-500">
                Choose Player
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AvailablePlayers;
