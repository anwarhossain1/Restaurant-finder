import "./App.css";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundaries/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
