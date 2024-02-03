import React from 'react'

const About = () => {
  return (
    <div className='bg-gradient-dark-blue min-h-screen p-52'>
        <div className='grid p-5 border border-light rounded-lg'>
            <h2 className='text-white text-center font-semibold text-xl'>About</h2>
            <p className='text-white text-justify py-2 font-thin'>
            Welcome to WeatherHub, your go-to destination for accurate and up-to-date weather information. At WeatherHub, we understand the importance of staying informed about the weather conditions in your city, whether you're planning a weekend getaway, a business trip, or just trying to make the most of your day. Our weather app, built on React, is designed to provide you with comprehensive weather details effortlessly.
            </p>
            
            
            <h6 className='font-semibold text-lg text-white'>Our Mission:</h6>
            <p className='text-white text-justify py-2 font-thin'>
            Our mission at WeatherHub is to empower you with the tools and information needed to make informed decisions based on the weather. We believe that accurate and reliable weather data is crucial for planning your daily activities, and we strive to deliver a seamless and user-friendly experience through our React-based weather app.
            </p>

            <p className='h-10'></p>
            <h6 className='font-semibold text-lg text-white text-center'>Why Choose WeatherHub:</h6>
            <p className='text-white text-justify py-2 font-thin'>
                <ul>
                    <li className='py-2'><h6 className='font-semibold underline text-white'>Accurate and Reliable Data:</h6> Our weather app sources its information from the trusted OpenWeather API, ensuring that you receive the most accurate and reliable weather forecasts for your city.</li>
                    <li className='py-2'><h6 className='font-semibold underline text-white'>User-Friendly Interface: </h6>We prioritize simplicity and ease of use. Our React-based app boasts an intuitive and user-friendly interface, allowing you to effortlessly navigate through various weather parameters and forecasts.</li>
                    <li className='py-2'><h6 className='font-semibold underline text-white'>Comprehensive Weather Details:</h6> From current temperature and humidity levels to detailed hourly and 7-day forecasts, WeatherHub provides a comprehensive overview of the weather conditions in your searched city.</li>
                    <li className='py-2'><h6 className='font-semibold underline text-white'>Beautiful Visuals:</h6> We believe that weather information should be presented in a visually appealing manner. Our app incorporates stunning visuals to make the weather data both informative and aesthetically pleasing.</li>
                    <li className='py-2'><h6 className='font-semibold underline text-white'>Fast and Responsive:</h6> Built on React, our app is optimized for speed and responsiveness. Experience swift weather updates and smooth navigation, ensuring you get the information you need when you need it.</li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default About