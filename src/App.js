import './App.css';
import Axiosget from './components/Axiosget';
import Axiospost from './components/Axiospost';
import Axiosput from  './components/Axiosput'

function App() {
  return (
    <div className="App">
      <Axiospost/>
      <br/>
      <Axiosput/>
      <br/>
      <Axiosget/>
    </div>
  );
}

export default App;
