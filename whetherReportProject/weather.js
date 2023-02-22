let city=document.getElementById('city')
let country=document.getElementById('country')
let temperature=document.getElementById('temperature')
let userinput=document.getElementById('userinput')

let checkTemp= async()=>
{ 
    cityValue=userinput.value
    if(cityValue == "")
    {
        alert("Please enter city name before search")
    }
    else
    {
      let response= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)  //to featch the data from API
       let data=await response.json()
       city.textContent=data.name
       country.textContent=data.sys.country
       temperature.textContent=data.main.temp
       console.log(city);
       console.log(country);
       console.log(temperature);
    }

}