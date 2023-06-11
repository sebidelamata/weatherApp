

async function queryWeather(_inputString){
    
    let out = fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${_inputString}`, {mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
       return response
    });

    return out;
}

export {queryWeather};