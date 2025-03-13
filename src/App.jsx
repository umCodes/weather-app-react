import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import Forecast from './components/Forecast';
import Current from './components/Current';




export const loading = 
<div className='animate-pulse'>
  loading...
</div>;

function App() {
  const [location, setLocation] = useState({
    name: '',
    country: '',
  });
  const [current, setCurrent] = useState( {
    temp_c: 0,
    condition: {
      text: '',
      icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
    },
    humidity: 0,
    wind_kph: 0,
    precip_mm: 0,
  });

  const [forecast, setForecast] = useState([]);
  const [query, setQuery] = useState('riyadh')
  
  useEffect(()=>{
        
    async function fetchData() {
      let interval;
      let prev = query;
      try {
        const response = await fetch(`https://weather-backend-as0u.onrender.com/weather?location=${query}`);
        
        if (!response.ok) {
          setQuery(prev);
          
          interval = setInterval(()=>{
            fetchData();
          }, 60 * 1000)
          throw new Error('Network response was not ok');
        }else{
        clearInterval(interval)
          const data = await response.json();
          setCurrent(data.current);
          setLocation(data.location);
          setForecast(data.forecast.forecastday[0].hour)
          console.log(data);

        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }

    }

      fetchData()
      setInterval(()=>{
        fetchData()
      }, 1800 * 1000)
      }, [query])

 
  return (
    <>
      <div className='m-4 mx-auto w-full'>  
        <Header setQuery={setQuery}/>
        <div className='flex flex-col items-center my-12 mx-auto px-auto w-full'>  
          <Current current={current} location={location}/>       
          <Forecast forecast={forecast}/>
        </div>
      </div>

    </>
  )
}

export default App
