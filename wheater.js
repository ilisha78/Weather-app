// const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
// const apikey= 'd3ab7ff63fca8c637d0f8b2f506a4248';

const searchInput = document.querySelector("#inp");
const searchButton = document.querySelector(".btn");

async function chechWheater(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d3ab7ff63fca8c637d0f8b2f506a4248`;

  const response = await fetch(url);
  // const response= await fetch(apiUrl + city +`&appid=${apikey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp2").innerHTML = data.main.temp + "°C";
  document.querySelector(".hmd").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchInput.onkeyup("click", ()=>{
    // console.log("clickedd", searchInput.value)
    chechWheater(searchInput.value)  ;
})

// searchButton.addEventListener("click", ()=>{
//   chechWheater(searchInput.value)
// })