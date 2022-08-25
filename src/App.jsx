// Components
import Attribution from "./components/Attribution";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <div className="max-w-xl mx-auto p-5 flex flex-col justify-center h-screen">
        <Header />

        <Chart />

        <Attribution />
      </div>
    </>
  );
}

export default App;
