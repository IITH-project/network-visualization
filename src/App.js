import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Graph from './Graph';

function App() {
  console.log(data.nodes)
  return (
    <div className="App">
        <Graph/>

        <a class="github-button" href="https://github.com/your-username" target="_blank">
        <span class="icon"></span>
        GitHub
    </a>
    </div>
  );
}

export default App;
