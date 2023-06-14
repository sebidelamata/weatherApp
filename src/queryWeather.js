async function queryWeather(_inputString) {
  try {
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bdea5caba7994efa8da210516230406&q=${_inputString}`,
      { mode: "cors" }
    );
    let data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export { queryWeather };
