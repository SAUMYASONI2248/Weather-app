// window.alert("hello")

   
async function w(){
    // window.alert("hello")
    const city=document.querySelector('#search>input').value;
    console.log(city);
    if(city==''){
        alert("Please enter a city name");
    }
    else{
        const apikey="d7a2422e3d4f91d589db5152854311e9"; 
        const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
        let res= await fetch(url)
        console.log(res);
        let data= await res.json()
        console.log(data);
        temp.innerHTML=Math.round(data.main.temp)+"℃";

        document.getElementById('city').innerHTML=data.name;
        wind.innerHTML=data.wind.speed+"km/h";
        humidity.innerHTML=data.main.humidity+"%";
        
      }
    }