import "./App.css";
import Smile from "./Smile";
import smile1 from "./assets/smile_1.svg";
import smile2 from "./assets/smile_2.svg";
import smile3 from "./assets/smile_3.svg";
import smile4 from "./assets/smile_4.svg";
import smile5 from "./assets/smile_5.svg";

function App() {
  return (
    <>
      <h1>Голосування за найкращий смайлик</h1>
      <div className="app_wrapper">
        <Smile name={smile1} />
        <Smile name={smile2} />
        <Smile name={smile3} />
        <Smile name={smile4} />
        <Smile name={smile5} />
      </div>
    </>
  );
}

export default App;
