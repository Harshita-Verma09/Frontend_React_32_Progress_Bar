import "./App.css";
import RedimateProgressBar from "./components/RedimateProgressBar";


function App() {
  return (
    <>
      <RedimateProgressBar />
      <div className="h-[200vh] bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Scroll down to see the progress bar
        </h1>
        <p className="text-lg max-w-xl text-center">
          This is a long content section to demonstrate the reading progress
          indicator. Keep scrolling to see the effect!
        </p>
      </div>
      
    </>
  );
}

export default App;
