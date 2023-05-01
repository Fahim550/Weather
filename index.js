// https://api.openweathermap.org/data/2.5/weather?q=London&appid=a62badcf96739aa49022a904db38871d
// https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=a62badcf96739aa49022a904db38871d
// a62badcf96739aa49022a904db38871d
document.getElementById("weatherform").addEventListener('submit',(e) =>{
    e.preventDefault();
    var inputvalue=document.getElementById("form_input").value 
     if(inputvalue){
        console.log("submit data :",inputvalue)
     }
    //  call data
    // $url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=a62badcf96739aa49022a904db38871d"
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=a62badcf96739aa49022a904db38871d`)
     .then(response =>response.json())
     .then(data=>{
        console.log("data coming :",data)
        document.getElementById('location').innerText=inputvalue
        const tempu=data.main.temp-273.15
        const temp=`${tempu.toFixed(2)} c`
        document.getElementById('tempareture').innerText=temp;
        const description=data.weather[0].description
        console.log("description weather :",description)
        document.getElementById('tstatus').innerText=description;
        inputvalue=document.getElementById("form_input").value=""
        

     })
})