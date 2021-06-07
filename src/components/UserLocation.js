import React from 'react'

export default function UserLocation(props) {

    const { temperature, description, region, country, wind_speed, pressure, precip, humidity, img } = props.weather;

    return (
        <div className="user-weather">
            
                
                    <h1><b>{region}</b>  {country}</h1>
                    
                    <p><b>{temperature}<sup>o</sup>C </b>, {description}</p>
             
                    <div className="roatate_me">
                    
                        <img className="mainImg rotating" src={img} alt="weather-img" />
                
                    </div>
                  
               
            

            <div className="d-flex flex-row other-weather-info">
                <div className="weather-info">
                    <p><b>Wind Speed</b></p>
                    <h2>{wind_speed}</h2>
                    <p>km/h</p>
                </div>

                <div className="weather-info">
                    <p><b>Pressure</b></p>
                    <h2>{pressure}</h2>
                    <p>millibar</p>
                </div>

                <div className="weather-info">
                    <p><b>Precipitation</b></p>
                    <h2>{precip}</h2>
                    <p>mm</p>
                </div>

                <div className="weather-info m-10">
                    <p><b>Humidity</b></p>
                    <h2>{humidity}</h2>
                    <p>%</p>
                </div>

            </div>
        </div>
    )
}