import Header from './components/Header';
import {useState} from "react"
import General from './components/General';
import Educational from './components/Educational';
import "./style/index.css"
import Practical from './components/Practical';
const App = () => {
  const [info, setInfo] = useState({});
  const [educationalInfo, setEducationalInfo] = useState([])
  const [educationalInput, setEducationalInput] = useState([])
  const [practicalInfo, setPracticalInfo] = useState([])
  const [practicalInput, setPracticalInput] = useState([])

  return (
    <div className="App">
      <Header />
      <h2>General</h2>
      <General info={info} setInfo={setInfo} />
      <h2>Educational Experience</h2>
      {educationalInput}
      <button onClick={() => {
        setEducationalInput(educationalInput.concat(<Educational educationalInfo={educationalInfo} setEducationalInfo={setEducationalInfo} key={Math.floor(Math.random() * 1000)}/>))
      }}>Add</button>
      <h2>Practical Experience</h2>
      {practicalInput}
          <button onClick={() => {
        setPracticalInput(practicalInput.concat(<Practical practicalInfo={practicalInfo} setPracticalInfo={setPracticalInfo} key={Math.floor(Math.random() * 1000)}/>))
      }}>Add</button>

    </div>
  );
}

export default App;
