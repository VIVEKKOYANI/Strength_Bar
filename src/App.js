
import './App.css';
import ProgressBar from './ProgressBar';

function App() {
  const testData = [
    { title: "Weak", bgcolor: "#6a1b9a", completed: 60 },
    { title: "Avrage", bgcolor: "#00695c", completed: 30 },
    { title: "improvement", bgcolor: "#ef6c00", completed: 53 },
    { title: "Cutoff level", bgcolor: "#ef6c00", completed: 53 },
  ];
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
        <div className='underbox'>
          <div className='subclass'>
            <span className='btnclose'>x</span>
          </div>
          <span className='conta'>Strength Bar</span><br />
          <span className='desc'>Introducing strength bar to help you know your week subjects.</span>
        </div>
        <div className='progressbox'>
          {testData.map((item, i) => {
            return(
              <ProgressBar key={i} title={item.title} />
            )
          })}
          {/* <div className=''>
            <span>Weak</span>
            <div className='progressboxline'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
          </div>
          <div className=''>
            <span>Average</span>
            <div className='progressboxline'>
              <div className='slot'></div>
              <div className='slot'></div>
              <div className='slot'></div>
            </div>
          </div> */}
          {/* <div className='slotGray'></div> */}
          {/* <div className='slotGray'></div> */}
        </div>
        <div className='finishbtnbox'>
          <button className='btnfinish'>Finish</button>
        </div>
      </div>
    </div>
  );
}

export default App;
