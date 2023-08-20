import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Graph from './Graph';

function App() {
  console.log(data.nodes)
  return (
    <div className="App">
        <Graph/>
    </div>
  );
}

export default App;
