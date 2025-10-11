let citiesData ={
    tehran:{city: 'Tehran',temp:12, weather: 'fogy', humidity:23 , windspeed: 42},
    dezful:{city: 'Dezful',temp:40, weather: 'sunny', humidity:35 , windspeed: 12},
    shiraz:{city: 'Shiraz',temp:20, weather: 'cloudy', humidity:23 , windspeed: 30},
}
let $ = document
let search = $.getElementById('search')
let searchBar = $.querySelector('.search-bar')

search.addEventListener('click', function(){
    let searchBarValue = searchBar.value
    let mainCitiesData = citiesData[searchBarValue]
    if (mainCitiesData) {
        $.querySelector('.city').innerHTML ='Weather in '+ mainCitiesData.city
        $.querySelector('.temp').innerHTML = mainCitiesData.temp +'°C'
        $.querySelector('.humidity').innerHTML = 'Humidity: '+ mainCitiesData.humidity+'%'
        $.querySelector('.wind').innerHTML ='Wind speed: '+ mainCitiesData.windspeed +'km/h'
        $.querySelector('.weather').classList.remove('loading')
    } else {
        alert("Enter the city name correctly.")
    }
});

