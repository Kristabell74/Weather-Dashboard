var todaysDate = moment();
$("#currentDay").text(todaysDate.format('MMMM Do YYYY, h:mm:ss a'));

var cardBody = document.getElementById('card-body');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=+city+&appid=eccdeb80b86f2956956741aed8d0996a')
    console.log("getApi", getApi)
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
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

//when the button is clicked to search it will fetch the weather
fetchButton.addEventListener('click', getApi);
//variables with the query Selectors
var cityInput = document.querySelector('+city+');
var searchBtn = document.querySelector(".Search")
var userCitySpan = document.querySelector('#city')
var citiesWeather = document.querySelector('.weather')

renderLastRegistered();
//display the message

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}
function renderLastRegistered() {
    var email = localStorage.getItem('+city+');
    var searchBtn = localStorage.getItem('.search');
    //if the search a city and it matches a city they show the weather
    if (!search || !city) {
        return (weather);

    }

    userCitySpan.textContent = city;

}

//event Listener to get the weather when click search with a city entered
searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    var city = document.querySelector(".city").value;
    //search button will display weather if a city is entered
    if (city == "searchBtn") {
        displayWeather()
        //if no city entered no information
    } else if (searchBtn == "") {
        displayMessage('"error" city name cannot be blank');
        //local storage for city
        localStorage.setItem("city", city);
        renderLastRegistered();
    }


});
