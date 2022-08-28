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

    breweryCard.append(
        breweryName,
        breweryType,
        breweryAddress,
        breweryPhone,
        breweryWebsite
    );

    breweryContainer.append(breweryCard);

    // displayMaps();
}

function displayMaps() {
    
}
// Make cards clickable to google map link 

// Google Map API to display info from brewery/near me results


// button action to relay API data from Near Me


// Append map data to page on click of brewery


// 