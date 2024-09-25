const btn=document.getElementById("send");
const input=document.getElementById("input");
const weatherImg=document.getElementById("weather-img");
const err=document.getElementById("err");
const apiKey = '0837213505e842f3a3b0490b885afd02';







btn.addEventListener("click",()=>{
    const city=input.value;
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    fetch(url)
    .then(res=> res.json())
    .then(json=> weatherView(json)) 
})


function weatherView(data){
    if(data.cod=='404'){
      err.style="display:block";
    }else{
        console.log(data);
        
        if(data.weather.main=="Clear"){
            weatherImg.src="./img/sun.png";
        }else if(data.weather.main=="Rain"){
            weatherImg.src="./img/rain.png";
        }
    }

}