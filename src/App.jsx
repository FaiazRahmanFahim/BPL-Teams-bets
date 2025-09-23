import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

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
            className={`btn border-r-0 rounded-l-xl font-semibold ${
              toggle === true ? " bg-[#E7FE29]" : ""
            }  cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn border-l-0 rounded-r-xl font-semibold ${
              toggle === false ? " bg-[#E7FE29]" : ""
            }  cursor-pointer`}
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
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
