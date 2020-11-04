var cardBody = document.getElementById('card-body');
//variables with the query Selectors
var cityInput = document.querySelector('#searchBtn');
var searchBtn = document.querySelector("#searchWeather");
var userCitySpan = document.querySelector('#city');
var citiesWeather = document.querySelector('.weather');

function getApi() {
    //fetch request gets a list of all the repos for the node.js organization
    var city = cityInput.value;
    var apiKey = "3c94a2bf570fbad6331f56c6025b394d"
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`
    // var requestUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // fetching the response from the api
    console.log("testing")
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var cityText = data.city.name;
            document.getElementById("city").innerHTML = "City: " + cityText;

            var dateText = data.list[0].dt_txt;
            document.getElementById("date").innerHTML = "Date: " + dateText;

            var tempText = data.list[0].main.temp;
            document.getElementById("temperature").innerHTML = "Fahrenheit Temperature: " + tempText;

            var humidityText = data.list[0].main.humidity;
            document.getElementById("humidity").innerHTML = "Humidity: " + humidityText;

            var windText = data.list[0].wind.speed;
            document.getElementById("wind").innerHTML = "Wind Speed: " + windText;

            //day Four Text Box
            var dayFourText = data.list[4].main.temp;
            document.getElementById("fourTemperature").innerHTML = "Temperature: " + dayFourText;

            var dayFourHumidity = data.list[4].main.humidity;
            document.getElementById("fourHumidity").innerHTML = "Humidity: " + dayFourHumidity;

            var dayFourWind = data.list[4].wind.speed;
            document.getElementById("fourWind").innerHTML = "Wind Speed: " + dayFourWind;


            //Day Three Text Box
            var dayThreeText = data.list[3].main.temp;
            document.getElementById("threeTemperature").innerHTML = "Temperature: " + dayThreeText;

            var dayThreeHumidity = data.list[3].main.humidity;
            document.getElementById("threeHumidity").innerHTML = "Humidity: " + dayThreeHumidity;

            var dayThreeWind = data.list[3].wind.speed;
            document.getElementById("threeWind").innerHTML = "Wind Speed: " + dayThreeWind;

            //Day Two Text Box
            var dayTwoText = data.list[2].main.temp;
            document.getElementById("twoTemperature").innerHTML = "Temperature: " + dayTwoText;

            var dayTwoHumidity = data.list[2].main.humidity;
            document.getElementById("twoHumidity").innerHTML = "Humidity: " + dayTwoHumidity;

            var dayTwoWind = data.list[2].wind.speed;
            document.getElementById("twoWind").innerHTML = "Wind Speed: " + dayTwoWind;

            //Day One Text Box
            var dayOneText = data.list[1].main.temp;
            document.getElementById("oneTemperature").innerHTML = "Temperature: " + dayOneText;

            var dayOneHumidity = data.list[1].main.humidity;
            document.getElementById("oneHumidity").innerHTML = "Humidity: " + dayOneHumidity;

            var dayOneWind = data.list[1].wind.speed;
            document.getElementById("oneWind").innerHTML = "Wind Speed: " + dayOneWind;

            //Day Zero Text Box
            var dayZeroText = data.list[0].main.temp;
            document.getElementById("zeroTemperature").innerHTML = "Temperature: " + dayZeroText;

            var dayZeroHumidity = data.list[0].main.humidity;
            document.getElementById("zeroHumidity").innerHTML = "Humidity: " + dayZeroHumidity;

            var dayZeroWind = data.list[0].wind.speed;
            document.getElementById("zeroWind").innerHTML = "Wind Speed: " + dayZeroWind;


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


//Displays the city Weather
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
//event Listener to get the weather when click search with a city entered
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    getApi();


});

