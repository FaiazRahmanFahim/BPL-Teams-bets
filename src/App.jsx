import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const availablePlayersPromise = fetch("/playersData.json").then((response) =>
  response.json()
);

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [purchasePlayers, setPurchasePlayers] = useState([]);
  const removePlayer = (p) => {
    //console.log(p);
    const filterData = purchasePlayers.filter((person) => person.id !== p.id);
    setPurchasePlayers(filterData);
    setAvailableBalance(availableBalance + p.price);
    toast.success(`${p.playerName} removed successfully!`);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className="navbar max-w-[1320px] mx-auto mt-5 flex justify-between items-center">
        <h3 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Player (${purchasePlayers.length}/6)`}
        </h3>
        <div className="join">
          <button
            onClick={() => setToggle(true)}
            className={`btn border-r-0 rounded-l-xl font-semibold transition-all duration-300 ${
              toggle === true
                ? "bg-gradient-to-r from-[#E7FE29] to-[#d4f017] text-black shadow-lg"
                : "bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-700"
            } cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn border-l-0 rounded-r-xl font-semibold transition-all duration-300 ${
              toggle === false
                ? "bg-gradient-to-r from-[#E7FE29] to-[#d4f017] text-black shadow-lg"
                : "bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-700"
            } cursor-pointer`}
          >
            Selected<span>({purchasePlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="text-center">
              <span className="loading loading-infinity loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers
            availablePlayersPromise={availablePlayersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="text-center">
              <span className="loading loading-infinity loading-xl"></span>
            </div>
          }
        >
          <SelectedPlayers
            purchasePlayers={purchasePlayers}
            removePlayer={removePlayer}
          ></SelectedPlayers>
        </Suspense>
      )}
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
