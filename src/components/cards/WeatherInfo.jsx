import React from 'react';
import icon_sunny from '../../assets/Weather Icons/1.png';
import icon_sunrise from '../../assets/Weather Icons/4.png';
import icon_sunset from '../../assets/Weather Icons/1.png';
import icon_rain from '../../assets/Weather Icons/2.png';
import icon_thunderstorm from '../../assets/Weather Icons/13.png';
import icon_cloudy from '../../assets/Weather Icons/12.png';
import icon_snow from '../../assets/Weather Icons/9.png';
import icon_mist from '../../assets/Weather Icons/7.png';
import icon_showerrain from '../../assets/Weather Icons/2.png';
import icon_haze from '../../assets/Weather Icons/7.png';



const WeatherInfo = ({prop}) => {
  const { main, coord, name, wind, weather, sys } = prop;
  const conditions = [
    { desc: "clear sky", icon: icon_sunny },
    { desc: "few clouds", icon: icon_sunny },
    { desc: "scattered clouds", icon: icon_cloudy },
    { desc: "broken clouds", icon: icon_cloudy },
    { desc: "shower rain", icon: icon_showerrain },
    { desc: "rain", icon: icon_rain },
    { desc: "thunderstorm", icon: icon_thunderstorm },
    { desc: "snow", icon: icon_snow },
    { desc: "mist", icon: icon_mist },
    { desc: "haze", icon: icon_haze }
  ];

  const weatherDescription = weather?.[0]?.description.toLowerCase();
  const currentCondition = conditions.find(
    (condition) => condition.desc.toLowerCase() === weatherDescription
  );
  const iconWeather = currentCondition ? currentCondition.icon : null;
  

// Function to convert Unix timestamp to readable date and time
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
  return date.toLocaleTimeString(); // Adjust options as needed
};

  return (
    <div className='block w-full'>
      <div className='flex justify-between w-full'>
        <div className='block w-1/3 self-start align-middle'>
          <div className='grid justify-center'>{iconWeather && <img src={iconWeather} alt="" className='h-20 w-20'/>}</div>
          <h3 className='text-white italic text-xl text-center py-2'>{name || "Chandigarh"}</h3>
          <h3 className='text-white font-bold text-5xl text-center'>{main?.temp || '10'}°C</h3>
          <p className='text-white text-lg text-center'>{weatherDescription}</p>
        </div>

        <div className='flex w-2/3 rounded-lg p-5'>
            <div className='block w-1/2 bg-glass rounded-lg p-5 m-2 transition delay-100 duration-300 ease-in-out hover:-translate-y-2'>

              <div className='flex justify-between'>
                <p className='text-white text-sm text-center'>Longitude: {coord?.lon || '12.122'}</p>
                <p className='text-white text-sm text-center'>Latitude: {coord?.lat || '19.021'}</p>
              </div>

              <div className='flex justify-between'>
              <p className='text-white text-sm text-center'>Speed: {wind?.speed || '12.122'}m/s</p>
                <p className='text-white text-sm text-center'>Degree: {wind?.deg || '19'}°</p>
              </div>
              
            </div>

            <div className='block w-1/2 bg-glass rounded-lg p-5 m-2 transition delay-100 duration-300 ease-in-out hover:-translate-y-2'>
              <div className='flex justify-between'>
                <p className='text-white text-sm text-center'>Max Temp: {main?.temp_max || "10"}°C</p>
                <p className='text-white text-sm text-center'>Min temp: {main?.temp_max || "17"}°C</p>
              </div>

              <div className='flex justify-between'>
                <p className='text-white text-sm text-center'>Max Temp: {main?.temp_max || "10"}°C</p>
                <p className='text-white text-sm text-center'>Min temp: {main?.temp_max || "17"}°C</p>
              </div>       
            </div>
            
        </div>
      </div>

      <div className='flex justify-evenly bg-glass p-5 m-5 rounded-md transition delay-100 duration-300 ease-in-out hover:-translate-y-2'>
        <div className='grid justify-items-center'>
          <img src={icon_sunrise} alt="Sunny Weather" className='h-10 w-10'/>
          <h4 className='text-lg  text-white'>Sunrise</h4>
          <p className='text-xs text-white'>{formatTime(sys?.sunrise) || '5:00:00'}</p>
        </div>
        <div className='grid justify-items-center'>
          <img src={icon_sunset} alt="Sunny Weather" className='h-10 w-10'/>
          <h4 className='text-lg  text-white'>Sunset</h4>
          <p className='text-xs  text-white'>{formatTime(sys?.sunset) || '17:00:00'}</p>
        </div>
      </div>
    </div>
    
  )
}

export default WeatherInfo