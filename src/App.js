// import logo from './logo.svg';
import "./App.css";
import Hello from "./Hello";
function App() {
  function Apple() {
    return <div>HEllo Apple Component</div>;
  }
  return (
    <div className="App">
      <h1>Hello World Hello React </h1>
      <Hello />
      {Apple()}          
      <Apple />
    </div>
  );
}

export default App;

// {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link" href="https://reactjs.org"
//           target="_blank" rel="noopener noreferrer">
//           Learn React
//           Hello React Hello
//         </a>
//       </header> */}
