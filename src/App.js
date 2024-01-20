import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Fetched data</h1>
      <ul>
        {info.map(myData => (
          <li key={myData.id}>
            <img src={myData.imageUrl} alt={myData.title} />
            <h2>{myData.title}</h2>
            <p>{myData.date}</p>
            <p>{myData.location}</p>
            <p>{myData.company}</p>
            <p>$ {myData.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
