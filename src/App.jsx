// import logo from './logo.svg';
import {add,sub,mul,div} from 'Container/Map_Filter/Com'

function App() {
  return (
    <>
    <ul>
        <li>sum of Two number is : {add(30,30)}</li>
        <li>sub of Two number is : {sub(30,10)}</li>
        <li>mul of Two number is : {mul(30,30)}</li>
        <li>div of Two number is : {div(30,13)}</li>
    </ul>
    </>
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
