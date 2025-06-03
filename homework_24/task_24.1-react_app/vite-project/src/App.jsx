import "./App.css";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <>
      <div>
        <h1 className="text-warning">SWAPI</h1>
        <h2 className="text-warning fs-4">The Star Wars API</h2>
        <p className="text-light fs-2">Try it now!</p>
      </div>
      <div className="wrapper">
        <Input />
        <Button />
      </div>
    </>
  );
}

export default App;
