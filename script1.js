// var searchBtn = document.querySelector("#searchWeather");
// var userCitySpan = document.querySelector('#city');
// var citiesWeather = document.querySelector('.weather');

// Promise.all({
//     var apiKey = "3c94a2bf570fbad6331f56c6025b394d"
//   fetch= `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`
//   fetch = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
//     //fetch response from API
//     fetch(requestUrl)
//         .then(function (responses) {
//             return Promise.all(reponses.map(function(response) {
//                 return response.json();
//         }));
//     .then(function (data) {
//             console.log(data)



//             var uvIndexText = data.city.name;
//             document.getElementById("UV Index").innerHTML = "UV Index" + uvIndexText;

//             for (var i = 0; i < data.length; i++) {
//                 // Creating elements, tablerow, tabledata, and anchor
//                 var createTableRow = document.createElement('tr');
//                 var tableData = document.createElement('td');
//                 var link = document.createElement('a');

//                 // Setting the text of link and the href of the link
//                 link.textContent = data[i].html_url;
//                 link.href = data[i].html_url;

//                 // Appending the link to the tabledata and then appending the tabledata to the tablerow
//                 // The tablerow then gets appended to the tablebody
//                 tableData.appendChild(link);
//                 createTableRow.appendChild(tableData);
//                 tableBody.appendChild(createTableRow);
//             }
//         }

// };


// var requestUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`
// var lat = response.city.coord.lat;
    // var lon = response.city.coord.lat;

    // import RecentSearches from 'recent-searches'

// const searches = new RecentSearches({
//   ttl: number, // Optional: ttl of searches in milliseconds, default to 24h (1000 * 60 * 60 * 24)
//   limit: number, // Optional: max number of entries that will be persisted, default is 50
//   namespace: string, // Optional: custom localStorage namespace
//   ranking: string // Optional: ranking strategy of recent searches, "PROXIMITY" | "TIME" | "PROXIMITY_AND_TIME", default is "PROXIMITY_AND_TIME"
// })

// var dayFourDate = data.list[4].dt_txt;
// document.getElementById("fourDate").innerHTML = "Date: " + dayFourDate;

// var dayFourHumidity = data.list[4].main.humidity;
// document.getElementById("fourHumidity").innerHTML = "Humidity:" + dayFourHumidity;

// var dayFourWind = data.list[4].wind.speed;
// document.getElementById("fourWind").innerHTML = "Wind Speed: " + dayFourWind;


// var dayThreeDate = data.list[3].dt_txt;
// document.getElementById("threeDate").innerHTML = "Date: " + dayThreeDate;

// var dayThreeHumidity = data.list[3].main.humidity;
// document.getElementById("threeHumidity").innerHTML = "Humidity:" + dayThreeHumidity;

// var dayThreeWind = data.list[3].wind.speed;;
// document.getElementById("threeWind").innerHTML = "Wind Speed: " + dayThreeWind;


// var dayTwoDate = data.list[2].dt_txt;
// document.getElementById("twoDate").innerHTML = "Date: " + dayTwoDate;

// var dayTwoHumidity = data.list[2].main.humidity;
// document.getElementById("twoHumidity").innerHTML = "Humidity:" + dayTwoHumidity;

// var dayTwoWind = data.list[2].wind.speed;;
// document.getElementById("twoWind").innerHTML = "Wind Speed: " + dayTwoWind;



// var dayOneDate = data.list[1].dt_txt;
// document.getElementById("oneDate").innerHTML = "Date: " + dayOneDate;

// var dayOneHumidity = data.list[1].main.humidity;
// document.getElementById("oneHumidity").innerHTML = "Humidity:" + dayOneHumidity;

// var dayOneWind = data.list[1].wind.speed;;
// document.getElementById("oneWind").innerHTML = "Wind Speed: " + dayOneWind;


// var dayZeroDate = data.list[0].dt_txt;
// document.getElementById("zeroDate").innerHTML = "Date: " + dayZeroDate;

// var dayZeroHumidity = data.list[0].main.humidity;
// document.getElementById("zeroHumidity").innerHTML = "Humidity:" + dayZeroHumidity;

// var dayZeroWind = data.list[0].wind.speed;;
// document.getElementById("zeroWind").innerHTML = "Wind Speed: " + dayZeroWind;


// var cityText = data.city.name;
//             document.getElementById("city").innerHTML = "City: " + cityText;


             // var theCity = data.city.name;{
    // document.getElementById("city") + theCity;
    //   localStorage.getItem('city');

    //   (console.log('city'))
    // }



    var latText = data.city.coord.lat.value;
    document.getElementById("lat").innerHTML = "Latitude: " + latText;

    var lonText = data.city.coord.lon.value;
    document.getElementByID("lon").innerHTML = "Longitude: " + lonText;


//does the same thing as the console log on 179
    // function catch (callback) {
//     if (response.error) {
//         callback()
    // }
// }
