// var button = document.getElementById("submit")
// var locationInput = document.getElementById("location")
// var location = document.getElementById("loc")
// var temperature = document.getElementById("temp")
// var wind = document.getElementById("windSpeed")
// var humidity = document.getElementById("humidity")
var url = "https://api.openweathermap.org/data/2.5/forecast?"
var iconUrl = "https://openweathermap.org/img/wn/13d@4x.png"
var apiKey = "e641eca1d4d40412dee9a14c4d25aac3"
var long = ""
var lat = ""


// button.addEventListener("click", startApp);


// function startApp() {
//     fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e641eca1d4d40412dee9a14c4d25aac3")
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`)
.then(function(response){
    return response.json();
})
.then(function (data) {
  console.log(data)
})

function cityPull(city){
    var date = dayjs("mm-dd-yy")
}

function printResults(){

  var resultCard = document.createElement('div');
  resultCard.classList.add('weatherCard');

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';


}


// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement('tr');
//         var tableData = document.createElement('td');
//         var link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

var icon = document.getElementById("icon");



