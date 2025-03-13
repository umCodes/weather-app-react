import { loading } from "../App"




function Current({current, location}){

    
return(<div className="min-w-1/2 mx-auto p-2 ">

    <div className='container flex justify-between items-center'>
        <div className="location flex flex-col w-fit p-4">
            <span>{location.name || loading}</span>
            <span className='text-xl font-bold'>{location.country || loading}</span>
          </div>

          <div className="condition  flex items-center flex-col w-fit ">
            <span><img src={current.condition.icon} /></span>
            <span className='text-lg font-bold'>{current.temp_c || 0}°C</span>
            <span>{current.condition.text || loading}</span>
          </div>

      </div>

    <div className="current flex text-center gap-4 my-2 mx-auto">
        <span className='m-2'>Humidity: {current.humidity + "%" || loading} </span>
        <span className='m-2'>Wind: {current.wind_kph + "kph" || loading}</span>
        <span className='m-2'>Precipitation: {current.precip_mm + "mm" || loading}</span>
    </div>

    </div>)
}

export default Current