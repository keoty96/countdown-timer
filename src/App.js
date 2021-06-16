import "./App.css";
import Footer from "./components/footer/Footer";
import Counter from "./components/content/Counter";

function App() {
  return (
    <div className="App">
      <p style={{ marginBottom: "5%" }}>We're launching soon</p>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
