// variables from HTML
const wellInformation = ["Stop 1", "Stop 2", "Stop 3", "Stop 4", "Stop 5", "Stop 6", "Stop 7", "Stop 8"];
const breweryContainerEl = document.querySelector('#brewery-container');
const searchButton = document.querySelector('#search-btn');
let city = "";
// button action to take input data and feed to brewery by city API


// need to make this a reusable function
// function to grab data from breweries by city
$('#search-btn').on('click', function() {

    // get value from input
     city = $("#city").val().trim();

     if(city == "")
     {
         alert("Please provide a city name!");
     }else
     {
        let saveArray = [];
    
        if(localStorage.getItem("searchHistory") != null)
        {
            saveArray = JSON.parse(localStorage.getItem("searchHistory"));
        }
    
        // push data to array
        saveArray.push(city);
    
        // push data to array
        localStorage.setItem("searchHistory", JSON.stringify(saveArray))
    
        // call load data function
        loadData(city);
     }
})





// Function to load data
function loadData(myCity)
{
    const apiUrlCity = `https://api.openbrewerydb.org/breweries?by_city=${myCity}&size=20`

    fetch(apiUrlCity)
    // console.log(apiUrlCity);
    // fetch data from API
        .then(function(response)
        {return response.json();
        })
        .then(function(data){
            console.log(data)

        // Choose a random brewery from the given array
        const randomBrewery = data[Math.floor(Math.random() * data.length)];
        console.log(randomBrewery)
        // start rendering to screen
        renderBreweryCards(randomBrewery);
        
    });

 
}





// load search history
function loadSearchHistory()
{
    // get data from local storage convert it to array
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory"));

    // Append all searched history
    $(".search-result").html("");
    searchHistory.forEach(function(value, key){
        if( key < 10)
        {
            $(".search-result").append("<p class='sbtn'>"+value+"</p>");
        }
    });
}


// check if there is any value in local storage to load
if(localStorage.getItem("searchHistory") != null)
{
    loadSearchHistory();
}

// search by history buttons
$(".sbtn").each(function(value, key){
    $(this).click(function(){
        loadData($(this).text())
    });
});



// function to grab data from city and display on page

const renderBreweryCards = (brewery) => {
    // rendering data fetched to page
    const breweryCity = brewery.city;
    const breweryContainer = $('#brewery-container');
    const breweryCard = $('<div>').attr('id', 'brewery-card').addClass(
        'brewery-card bg-gray-300 rounded-lg p-4 m-4 w-80 is-two-thirds'
    )
    const breweryName = $('<h2>').text(brewery.name).addClass(
        'is-size-3'
    )
    const breweryType = $('<p>').text(brewery.brewery_type);
    const breweryAddress = $('<p>').text(brewery.street + ", " + brewery.city + ", " + brewery.state);
    const breweryPhone = $('<p>').text(brewery.phone);
    const breweryWebsite = $('<a>').text(brewery.website_url).attr('href', brewery.website_url);
    const saveBtn = $('<button>').attr('id', 'save-btn').addClass('save-btn').text('Save This Info!');

    breweryCard.append(
        breweryName,
        breweryType,
        breweryAddress,
        breweryPhone,
        breweryWebsite,
        saveBtn
    );
    breweryContainer.append(breweryCard);

    let saveName = brewery.name;
    let saveCity = brewery.city;
    let saveAddress = brewery.address;
    let saveUrl = brewery.website_url;

    let saveData = {
        breweryName: saveName,
        breweryAddress: saveAddress,
        breweryCity: saveCity,
        breweryUrl: saveUrl
    }

    loadSearchHistory();

}

// Save info on each card with button click if possible?


// function saveInfo (saveData) {
//     $('#save-btn').on('click', function(){
//         localStorage.setItem(saveData.breweryName, JSON.stringify(saveData));
//     });
// }

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