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

    // fetching the response from the api
    console.log("testing")
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            var cityText = data.city.name;
            document.getElementById("city").innerHTML = "City: " + cityText;

            var dateText = data.list[0].dt_txt;
            document.getElementById("date").innerHTML = "Date: " + dateText;

            var latText = data.city.coord.lat;
            document.getElementById("lat").innerHTML = "Latitude: " + latText;

            var lonText = data.city.coord.lon;
            document.getElementById("lon").innerHTML = "Longitude: " + lonText;


            // var uvRequestUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${latText}&lon=${lonText}&appid=${apiKey}`
            // console.log(uvRequestUrl)

            var tempText = data.list[0].main.temp;
            document.getElementById("temperature").innerHTML = "Fahrenheit Temperature: " + tempText;

            var humidityText = data.list[0].main.humidity;
            document.getElementById("humidity").innerHTML = "Humidity: " + humidityText;

            var windText = data.list[0].wind.speed;
            document.getElementById("wind").innerHTML = "Wind Speed: " + windText;

            // var uvIndexText = `https://api.openweathermap.org/data/2.5/uvi?lat=${latText}&lon=${lonText}&appid=${apiKey}`;
            // document.getElementById("uvi").innerHTML = "UV Index: " + uvIndexText;


            //day Four Text Box
            var dayFourText = data.list[34].main.temp;
            document.getElementById("fourTemperature").innerHTML = "Temperature: " + dayFourText;

            var dayFourHumidity = data.list[34].main.humidity;
            document.getElementById("fourHumidity").innerHTML = "Humidity: " + dayFourHumidity;

            var dayFourWind = data.list[34].wind.speed;
            document.getElementById("fourWind").innerHTML = "Wind Speed: " + dayFourWind;

            var dayFourIcon = data.list[34].weather[0].icon;
            var dayFourIconurl = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
            document.getElementById("fourIcon").innerHTML = "<img src=" + dayFourIconurl + ">";

            //Day Three Text Box
            var dayThreeText = data.list[26].main.temp;
            document.getElementById("threeTemperature").innerHTML = "Temperature: " + dayThreeText;

            var dayThreeHumidity = data.list[26].main.humidity;
            document.getElementById("threeHumidity").innerHTML = "Humidity: " + dayThreeHumidity;

            var dayThreeWind = data.list[26].wind.speed;
            document.getElementById("threeWind").innerHTML = "Wind Speed: " + dayThreeWind;

            var dayThreeIcon = data.list[26].weather[0].icon;
            var dayThreeIconurl = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
            document.getElementById("threeIcon").innerHTML = "<img src=" + dayThreeIconurl + ">";


            //Day Two Text Box
            var dayTwoText = data.list[18].main.temp;
            document.getElementById("twoTemperature").innerHTML = "Temperature: " + dayTwoText;

            var dayTwoHumidity = data.list[18].main.humidity;
            document.getElementById("twoHumidity").innerHTML = "Humidity: " + dayTwoHumidity;

            var dayTwoWind = data.list[18].wind.speed;
            document.getElementById("twoWind").innerHTML = "Wind Speed: " + dayTwoWind;

            var dayTwoIcon = data.list[18].weather[0].icon;
            var dayTwoIconurl = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
            document.getElementById("twoIcon").innerHTML = "<img src=" + dayTwoIconurl + ">";


            //Day One Text Box
            var dayOneText = data.list[8].main.temp;
            document.getElementById("oneTemperature").innerHTML = "Temperature: " + dayOneText;

            var dayOneHumidity = data.list[8].main.humidity;
            document.getElementById("oneHumidity").innerHTML = "Humidity: " + dayOneHumidity;

            var dayOneWind = data.list[8].wind.speed;
            document.getElementById("oneWind").innerHTML = "Wind Speed: " + dayOneWind;

            var dayOneIcon = data.list[8].weather[0].icon;
            var dayOneIconurl = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
            document.getElementById("oneIcon").innerHTML = "<img src=" + dayOneIconurl + ">";



            //Day Zero Text Box
            var dayZeroText = data.list[0].main.temp;
            document.getElementById("zeroTemperature").innerHTML = "Temperature: " + dayZeroText;

            var dayZeroHumidity = data.list[0].main.humidity;
            document.getElementById("zeroHumidity").innerHTML = "Humidity: " + dayZeroHumidity;

            var dayZeroWind = data.list[0].wind.speed;
            document.getElementById("zeroWind").innerHTML = "Wind Speed: " + dayZeroWind;

            var dayZeroIcon = data.list[0].weather[0].icon;
            var dayZeroIconurl = "http://openweathermap.org/img/w/" + dayZeroIcon + ".png";
            document.getElementById("zeroIcon").innerHTML = "<img src=" + dayZeroIconurl + ">";


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
    //Function getting API
    // function getAPI(){}
    fetch(uvRequestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            //Loop over the data to generate a table, each table row will have a link to the repo url

            for (var i = 0; i < data.length; i++) {
                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);

                // Setting the text of link and the href of the link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                // Appending the link to the tabledata and then appending the tabledata to the tablerow
                // The tablerow then gets appended to the tablebody
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);


            }
        })
        .catch(function (error) {
            console.log(error)
        }
        )
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

