import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className='btnhistory'>History</button>
      <div className='soltline'>
        <div className='slot'></div>
        <div className='slotGray'></div>
        <div className='slotGray'></div>
      </div>
      <div className='verticalsolt'></div>
      <div className='box'>
        <div className='underbox'></div>
        <div className='progressbox'>

        </div>
        <div className='finishbtnbox'>

        </div>
      </div>
    </div>
  );
}

export default App;
