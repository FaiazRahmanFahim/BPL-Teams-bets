import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";

const availablePlayersPromise = fetch("/playersData.json").then((response) =>
  response.json()
);

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="navbar max-w-[1320px] mx-auto mt-5 flex justify-between items-center">
        {toggle === true ? (
          <h3 className="font-bold text-2xl">Available Players</h3>
        ) : (
          <h3 className="font-bold text-2xl">Selected Player</h3>
        )}

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
            Selected<span>(0)</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <AvailablePlayers
            availablePlayersPromise={availablePlayersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <SelectedPlayers></SelectedPlayers>
        </Suspense>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
