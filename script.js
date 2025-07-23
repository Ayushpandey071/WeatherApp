async function getWeather()
     {
        const city = document.getElementById('city-input').value;
        const apiKey = '570975216de4dcdc1cf68ecb78357dad';
        const url= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;
    

        try{
            const response = await fetch(url);
            if(!response.ok)
                throw new Error('City not Found');
            


            const data = await response.json();

            document.getElementById('temperature').innerText = `${data.main.temp.toFixed(0)}°C`;
            document.getElementById('city-name').innerText = `${data.name}`;
            document.getElementById('humidity').innerText = `${data.main.humidity}%`;
            document.getElementById('wind-speed').innerText = `${data.wind.speed*18/5} km/h`

              document.querySelector('.weather-info').style.display = 'block';
        }
        catch(error){
            alert(error.message);
        }
    }