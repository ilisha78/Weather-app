// const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
// const apikey= 'd3ab7ff63fca8c637d0f8b2f506a4248';

const searchInput = document.querySelector("#inp");
// const searchButton = document.querySelector(".btn");

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


  let weatherIcon = document.querySelector(".weatherIcon");
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "https://png.pngtree.com/png-clipart/20220918/ourmid/pngtree-floating-realistic-clouds-png-image_6195497.png"}
  
  else if(data.weather[0].main == "Dizzle"){
    weatherIcon.src = "https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-dark-clouds-and-raindrops-png-image_2478510.jpg"
    }
  else if(data.weather[0].main == "Clear"){
    // weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/009/304/897/small/sun-icon-set-clipart-design-illustration-free-png.png"
    weatherIcon.src = "https://png.pngtree.com/png-vector/20210407/ourmid/pngtree-sun-cartoon-illust-sunny-weather-png-image_3208076.jpg"
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "https://www.freeiconspng.com/uploads/rain-cloud-icon-28.png"
  }
  else if (data.weather[0].main == "Mist"){
    weatherIcon.src ="https://img.freepik.com/free-vector/3d-realistic-illustration-fog-grey-mist-cigarette-smoke_33099-754.jpg?w=360"
  }

  }

searchInput.onkeyup("click", ()=>{
    // console.log("clickedd", searchInput.value)
    chechWheater(searchInput.value)  ;
})

// searchButton.addEventListener("click", ()=>{
//   chechWheater(searchInput.value)
// })
