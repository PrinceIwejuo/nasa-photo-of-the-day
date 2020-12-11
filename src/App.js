import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    const fetchImg = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=wb1vnyVTQl1zl1XSLfL76SHCumpFjvf9vwibgjMT')
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {

      });
    };
    fetchImg();
  }, []);
  return (
    <div className="App">
      <h1>{nasaData.title}</h1>
      <p>
        Life on Mars <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={nasaData.hdurl} />    
    </div>
  );
}

export default App;
