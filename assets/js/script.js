// variables from HTML

// button action to take input data and feed to brewery by city API
// need input let to be city for API

// function to grab data from breweries by city
const apiUrlCity = `https://api.openbrewerydb.org/breweries?by_city=saint_louis&size=20`

fetch(apiUrlCity)
    // console.log(apiUrlCity);
    .then(function(response)
    {return response.json();
    })
    .then(function(data){
        console.log(data)

        const randomBrewery = data[Math.floor(Math.random() * data.length)];
        console.log(randomBrewery)
        // variables for data information
        renderBreweryCards(randomBrewery);
        
    });


// function to grab data from city and display on page

const renderBreweryCards = (brewery) => {
    const breweryContainer = $('#brewery-container');
    const breweryCard = $('<div>').addClass(
        'brewery-card bg-gray-300 rounded-lg p-4 m-4 w-80'
    );
    const breweryName = $('<h2>').text(brewery.name);
    const breweryType = $('<p>').text(brewery.brewery_type);
    const breweryAddress = $('<p>').text(brewery.street);
    const breweryPhone = $('<p>').text(brewery.phone);
    const breweryWebsite = $('<a>').text(brewery.website_url);
    const saveBtn = $('<button>').text('Save This Info!');

    breweryCard.append(
        breweryName,
        breweryType,
        breweryAddress,
        breweryPhone,
        breweryWebsite,
        saveBtn
    );

    breweryContainer.append(breweryCard);

    // fetchMaps();
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

