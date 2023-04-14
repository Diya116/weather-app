const container=document.querySelector(".container")
const date=document.querySelector(".date")
const newtime=document.querySelector("#current-time")
console.log(time)
setInterval(() => {
  const time=new Date();
  const month=time.getMonth();
  const date=time.getDate();
  const day=time.getDay();
  const hour=time.getHours();
  const minute=time.getMinutes();
  const format12hour=hour>=13?hour%12:hour
  const ampm=hour>=12?'PM':'AM';
  newtime.innerText="20:30";
  console.log("hyy")
  console.log(day)
  console.log(date)
},1000);
url="https://api.unsplash.com/photos/?client_id=7k_gq3KPCBxnB6MBI72XEPYqeQH4lnQOaidF0ix2LvA"

const backgroundimg=()=>{fetch(url).then(Response=>Response.json()).then(image=>{
    
    let imgurl=image[0].urls.small
    console.log(imgurl);
    container.style.backgroundImage=("url('https://images.unsplash.com/photo-1674574124792-3be232f1957f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzUxNjJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4MTMxMjMyNA&ixlib=rb-4.0.3&q=80&w=400')}")
})}
const API_KEY="4e1e2ae8aeb978d3d1d983d0c34f9a9d";
const userlocation=()=>{
    const status=document.querySelector('.status');
    const success=(position)=>{
        console.log(position)
    }
    const error=()=>{
        status.textContent='unable to retrive your location'
    }
    navigator.geolocation.getCurrentPosition(success,error)
}
document.querySelector('.location').addEventListener("click",userlocation())
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("not support");
    }
  }
  
  function showPosition(position) {
    
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly&appid=${API_KEY}`).then(data=>data.json()).then(item=>console.log(item))
  }
  const options={
    method:'GET',
    headers:{
      'x-api-key':"EHs1CjZXUiLMsE2zUDCvNA==NzBCrQdtme7svdD9"
    }
  }
  getLocation()
const bycity=fetch("https://api.api-ninjas.com/v1/weather?city=vadodara",options).then(res=>res.json()).then(item=>console.log(item))
bycity()


