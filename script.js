var cardBody = document.getElementById('card-body');
//variables with the query Selectors
var cityInput = document.querySelector('#searchBtn');
var searchBtn = document.querySelector("#searchWeather");
var userCitySpan = document.querySelector('#city');
var citiesWeather = document.querySelector('.weather');

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var city = cityInput.value;
    var apiKey = "3c94a2bf570fbad6331f56c6025b394d"
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
    //fetching the response from the api
    console.log("testing")
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var cityText = data.city.name;
            document.getElementById("city").innerHTML = "City: " + cityText;

            var tempText = data.list[0].main.temp;
            document.getElementById("temperature").innerHTML = "Fahrenheit Temperature: " + tempText;

            var humidityText = data.list[0].main.humidity;
            document.getElementById("humidity").innerHTML = "Humidity: " + humidityText;

            var windText = data.list[0].wind.speed;
            document.getElementById("wind").innerHTML = "Wind Speed: " + windText;
            //Box Information FOR TEMPERATURE

            var dayFourText = data.list[0].main.temp;
            var dayFourDate =
                document.getElementById("dayFour").innerHTML = "Five Day Forcast Fahrenheit Temperature: " + dayFourText;

            var dayThreeText = data.list[1].main.temp;
            document.getElementById("dayThree").innerHTML = "Five Day Forcast Fahrenheit Temperature: " + dayThreeText;

            var dayTwoText = data.list[2].main.temp;
            document.getElementById("dayTwo").innerHTML = "Five Day Forcast Fahrenheit Temperature: " + dayTwoText;

            var dayOneText = data.list[3].main.temp;
            document.getElementById("dayOne").innerHTML = "Five Day Forcast  Fahrenheit Temperature: " + dayOneText;

            var dayZeroText = data.list[4].main.temp;
            document.getElementById("dayZero").innerHTML = "Five Day Forcast Fahrenheit Temperature: " + dayZeroText;

            //Loop over the data to generate a table, each table row will have a link to the repo url
            for (var i = 0; i < data.length; i++) {
                // Creating elements, tablerow, tabledata, and anchor
                var createTableRow = document.createElement('tr');
                var tableData = document.createElement('td');
                var link = document.createElement('a');

                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
        });
}


//Displays the city weather
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
//event Listener to get the weather when click search with a city entered
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getApi();


});

// function getTheApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var latInput = lat={lat}.value;
//     var lonInput = lon={lon}.value;
//     var apiKey2 = "3c94a2bf570fbad6331f56c6025b394d"
//     var requestUrl = 'https://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=${apiKey2}'
//     //fetching the response from the api
//     console.log("testing")
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)

//             // var tempText = data.list[0].main.temp;
//             // document.getElementById("temperature").innerHTML = "Temperature: " + tempText;
//         });

// }

