import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react";

const availablePlayersPromise = fetch("/playersData.json").then((response) =>
  response.json()
);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <AvailablePlayers
          availablePlayersPromise={availablePlayersPromise}
        ></AvailablePlayers>
      </Suspense>
      {/* <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <SelectedPlayers></SelectedPlayers>
      </Suspense> */}
      <Footer></Footer>
    </>
  );
}

export default App;
