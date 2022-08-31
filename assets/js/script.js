// variables from HTML
const saveArray = [];
const apiKey = "AIzaSyAnLQaZQJJSUlJR12J-vpuXghllvQP2nx4";
let validStateCodes = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];
const breweryContainerEl = document.querySelector("#brewery-container");
const searchButton = document.querySelector("#search-btn");
// button action to take input data and feed to brewery by city API

// need to make this a reusable function
// function to grab data from breweries by city\

function handleSubmit(event) {
  event.preventDefault();
  const city = $("#city").val().trim();

  callCityApi(city);
}

function callCityApi(city) {
  const apiUrlCity = `https://api.openbrewerydb.org/breweries?by_city=${city}&size=20`;

  fetch(apiUrlCity)
    // console.log(apiUrlCity);
    // fetch data from API
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data)

      // Choose a random brewery from the given array
      const randomBrewery = data[Math.floor(Math.random() * data.length)];
      // console.log(randomBrewery)
      // start rendering to screen
      renderBreweryCards(randomBrewery);
    });
}

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
function abbreviate(input, to) {
  var states = [
    ["Arizona", "AZ"],
    ["Alabama", "AL"],
    ["Alaska", "AK"],
    ["Arkansas", "AR"],
    ["California", "CA"],
    ["Colorado", "CO"],
    ["Connecticut", "CT"],
    ["Delaware", "DE"],
    ["Florida", "FL"],
    ["Georgia", "GA"],
    ["Hawaii", "HI"],
    ["Idaho", "ID"],
    ["Illinois", "IL"],
    ["Indiana", "IN"],
    ["Iowa", "IA"],
    ["Kansas", "KS"],
    ["Kentucky", "KY"],
    ["Louisiana", "LA"],
    ["Maine", "ME"],
    ["Maryland", "MD"],
    ["Massachusetts", "MA"],
    ["Michigan", "MI"],
    ["Minnesota", "MN"],
    ["Mississippi", "MS"],
    ["Missouri", "MO"],
    ["Montana", "MT"],
    ["Nebraska", "NE"],
    ["Nevada", "NV"],
    ["New Hampshire", "NH"],
    ["New Jersey", "NJ"],
    ["New Mexico", "NM"],
    ["New York", "NY"],
    ["North Carolina", "NC"],
    ["North Dakota", "ND"],
    ["Ohio", "OH"],
    ["Oklahoma", "OK"],
    ["Oregon", "OR"],
    ["Pennsylvania", "PA"],
    ["Rhode Island", "RI"],
    ["South Carolina", "SC"],
    ["South Dakota", "SD"],
    ["Tennessee", "TN"],
    ["Texas", "TX"],
    ["Utah", "UT"],
    ["Vermont", "VT"],
    ["Virginia", "VA"],
    ["Washington", "WA"],
    ["West Virginia", "WV"],
    ["Wisconsin", "WI"],
    ["Wyoming", "WY"],
  ];

  if (to == "abbr") {
    input = input.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    for (i = 0; i < states.length; i++) {
      if (states[i][0] == input) {
        return states[i][1];
      }
    }
  } else if (to == "name") {
    input = input.toUpperCase();
    for (i = 0; i < states.length; i++) {
      if (states[i][1] == input) {
        return states[i][0];
      }
    }
  }
}

// Save city searches?
// const searchCont = $('#search-container');
// const cityBtn = $('<button>').text(city);

// searchCont.append(cityBtn);

// function to grab data from city and display on page

const renderBreweryCards = (brewery) => {
  // rendering data fetched to page
  const breweryCity = brewery.city;
  const breweryContainer = $("#brewery-container");
  const returnContainer = $("<div>");
  const breweryCard = $("<div>")
    .attr("id", "brewery-card")
    .addClass("brewery-card bg-gray-300 rounded-lg p-4 m-4 w-80 is-two-thirds");

  // const nameIcon = $('<i>').addClass("fa-solid fa-building").text(" ");
  const breweryName = $("<h2>").text(brewery.name).addClass("is-size-3");
  //   const typeIcon = $('<i>').addClass("fa-solid fa-minimize").text(" ");
  const breweryType = $("<p>").text(brewery.brewery_type);
  const breweryAddress = $("<p>").text(
    brewery.street + ", " + brewery.city + ", " + brewery.state
  );
  //   const addressIcon = $('<i>').addClass("fa-solid fa-map-location").text(" ");
  const breweryPhone = $("<p>").text(brewery.phone);
  //   const phoneIcon = $('<i>').addClass("fa-solid fa-mobile-retro").text(" ");
  const breweryWebsite = $("<a>")
    .text(brewery.website_url)
    .attr("href", brewery.website_url);
  // const websiteIcon = $('<i>').addClass("fa-solid fa-laptop").text(" ");
  const saveBtn = $("<button>")
    .attr("id", "save-btn-id")
    .addClass("save-btn")
    .text("Save This Info!");
  let formatStateCode = abbreviate(brewery.state, "abbr");

  breweryCard.append(
    breweryName,
    breweryType,
    breweryAddress,
    breweryPhone,
    breweryWebsite,
    saveBtn
  );
  breweryContainer.append(breweryCard);

  let saveData = {
    breweryName: brewery.name,
    breweryAddress: brewery.city,
    breweryCity: brewery.address,
    breweryUrl: brewery.website_url,
  };

  saveArray.push(saveData);
  console.log();
  saveInfo(saveData);

  let mapContainer = `
    <div class="is-two-thirds" id="map" style="height: 400px; width: 400px"></div>
  `;

  findLatLon(brewery.street, brewery.city, formatStateCode, brewery.name);
  //   displayMap()
};

// Save info on each card with button click if possible?

function saveInfo(saveData) {
  $(".save-btn").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log(saveData);
    localStorage.setItem(saveData.breweryName, JSON.stringify(saveData));
  });
}

async function findLatLon(street, city, state, name) {
  let formatStreet = street.replace(/\s/g, "+");
  let formatCity = city.replace(/\s/g, "+");

  let apiUrlLocal = `https://maps.googleapis.com/maps/api/geocode/json?address=${formatStreet},+${formatCity},+${state}&key=AIzaSyAnLQaZQJJSUlJR12J-vpuXghllvQP2nx4`;

  const response = await fetch(apiUrlLocal);
  const data = await response.json();
  if (data.results.length === 0) {
    $("#map-container").html(
      `<h2 class="text-center">No map available for ${name}</h2>`
    );
  } else {
    lat = data.results[0].geometry.location.lat;
    lon = data.results[0].geometry.location.lng;
    initMap(lat, lon, name);
  }
}

async function initMap(lat, lon, name) {
  // Create a map object and specify the Dom element for display.
  let map = new google.maps.Map(document.getElementById("map-container"), {
    center: { lat: lat, lng: lon },
    scrollwheel: false,
    zoom: 13,
  });

  let marker = new google.maps.Marker({
    position: { lat: lat, lng: lon },
    map: map,
  });

  let infoWindow = new google.maps.InfoWindow({
    content: name,
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

$("#search-form").on("submit", handleSubmit);
// parse saved data to page below buttons

// pull map data from google map api

// function to display map on page
// function displayMap() {

// }
// let street = brewery.street;
// let city = brewery.city;
// let state = brewery.state;
// let country = brewery.country;

// const apiUrlMap = `https://maps.googleapis.com/maps/api/geocode/json?new_forward_geocoder=true&address=${street},+${city},+${state}&key=AIzaSyAnLQaZQJJSUlJR12J-vpuXghllvQP2nx4`;

// fetch(apiUrlMap)
// // might not need to json map
// // .then(function(response){
// //     return(response.json());
// // })
// const mapContainer = $('#map-container');

// function to display maps

// function to Make cards clickable to google map link
