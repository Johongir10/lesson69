const btn=document.getElementById("send");
const input=document.getElementById("input");
const weatherImg=document.getElementById("weather-img");
const err=document.getElementById("err");
const apiKey= '3a1838e67dff9e8b8c8224caf16b5ded';
const  temp=document.getElementById("temp");
const  desc=document.getElementById("desc");
const humu=document.getElementById("humu");
const wind=document.getElementById("wind");



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
        err.style="display:none";
        console.log(data);

        if(data.weather[0].main=="Clear"){
            weatherImg.src="./img/sun.png";
        }else if(data.weather[0].main=="Rain"){
            weatherImg.src="/img/rain.png";
        }else if(data.weather[0].main=="Clouds"){
            weatherImg.src="./img/cloudly.png";
        }else if(data.weather[0].main="Snow"){
            weatherImg.src="./img/snow.png";
        }else{
            weatherImg.src="./img/sun.png";
        }
        console.log("jkhg");
        
        temp.textContent=data.main.temp+" C";
        desc.textContent=data.weather[0].description;
        humu.textContent=data.weather[0].humidity+"%\n"+"Humidity";
        wind.textContent=data.wind.speed+"km/h";
    }
}