// variables from HTML
const saveArray = [];
const wellInformation = ["Stop 1", "Stop 2", "Stop 3", "Stop 4", "Stop 5", "Stop 6", "Stop 7", "Stop 8"];

// button action to take input data and feed to brewery by city API
// need input let to be city for API

// function to grab data from breweries by city
$('#search-btn').on('click', function() {
    const city = $("#city").val().trim();

    const apiUrlCity = `https://api.openbrewerydb.org/breweries?by_city=${city}&size=20`

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

    // Save city searches?
    // const searchCont = $('#search-container');
    // const cityBtn = $('<button>').text(city);

    // searchCont.append(cityBtn);
})

// function to grab data from city and display on page

const renderBreweryCards = (brewery) => {
    // rendering data fetched to page
    const breweryCity = brewery.city;
    const breweryContainer = $('#brewery-container');
    const breweryCard = $('<div>').addClass(
        'brewery-card bg-gray-300 rounded-lg p-4 m-4 w-80'
    );
    const breweryName = $('<h2>').text(brewery.name)
    const breweryType = $('<p>').text(brewery.brewery_type);
    const breweryAddress = $('<p>').text(brewery.street);
    const breweryPhone = $('<p>').text(brewery.phone);
    const breweryWebsite = $('<a>').text(brewery.website_url);
    const saveBtn = $('<button>').attr('id', 'save-btn').text('Save This Info!');

    breweryCard.append(
        breweryName,
        breweryType,
        breweryAddress,
        breweryPhone,
        saveBtn,
        breweryWebsite,
    );
    breweryContainer.append(breweryCard);

    const saveName = brewery.name;
    const saveCity = brewery.street;
    const saveUrl = brewery.website_url;

    let saveData = {
        saveName,
        saveCity,
        saveUrl
    }

    saveArray.push(saveData);

    saveInfo(this);
    displayMap()

}

// Why won't this function? everything seems right

function saveInfo () {
    $('#save-btn').on('click', function(){
        localStorage.setItem(wellInformation, JSON.stringify(saveArray));
    });
}








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
// Make cards clickable to google map link 

// Google Map API to display info from brewery/near me results


// button action to relay API data from Near Me


// Append map data to page on click of brewery