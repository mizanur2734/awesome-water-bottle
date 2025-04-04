import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

// ------------------------------------------------------
// const bottlesPromise = fetch("./bottles.json").then((res) => res.json());
// const bottlesPromise2 = fetch(
//   "https://raw.githubusercontent.com/mizanur2734/bottles-data/refs/heads/main/bottles.json"
// ).then((res) => res.json);
//------------------------------------------------------------------

const bottlesPromise = fetch("bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h1>Buy Awesome Water bottle</h1>
      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
