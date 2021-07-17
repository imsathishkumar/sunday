const fetchUrl =fetch("https://restcountries.eu/rest/v2/all");

fetchUrl.then((res)=>{
    return res.json();
}).then((res)=>{
    create(res);
}).catch((err)=>{
    console.log(err);
})

function create(data){
    const section = document.getElementById('root');
    data.forEach(obj => {
        const temp= document.createElement('div');
        temp.setAttribute('class','shadow-lg p-8 rounded text-center');
        temp.setAttribute('style','width:350px')
        let p='';
        p+=` 
        <img class="rounded-lg" src="${obj.flag}" alt="">
        <h1 class="text-center font-bold text-2xl mt-4 ">${obj.name}</h1>
        <p class="text-center mt-4 text-gray-400 font-semibold">Capital</p>
        <p class="text-center text-md font-semibold">${obj.capital}</p>
        <div class="flex justify-evenly">
            <div>
                <p class="text-center font-semibold mt-4 text-gray-400">Latitude</p>
                <p class="font-semibold">${obj.latlng[0]}</p>
            </div>
            <div>
                <p class="text-center mt-4 text-gray-400 font-semibold">Longitude</p>
                <p class="font-semibold">${obj.latlng[1]}</p>
            </div>
        </div>
         <button  class="mt-4 bg-blue-600 px-4 py-1 text-white rounded-full"  onclick = cheakWeather('${obj.name}')>Show Weather</button>
        `


    temp.innerHTML = p;
    section.appendChild(temp);
    });
    document.body.append(section);
}

function cheakWeather(data){
    let climate=fetch("https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=cc7670c9ef868e16633ab398d81a0e1f");
    console.log('function is called')
    climate.then((res)=>{
        return res.json();
    }).then((weather)=>{
        console.log(weather)
        alert('Latitude is: ' + weather.coord.lat+'Longitude is: ' + weather.coord.lon+'Temperature is: ' + weather.main.temp);
        
    }).catch((err) => {
        console.log(err);
    })
}
