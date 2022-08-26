// variables from HTML

// button action to take input data and feed to brewery by city API
// need input let to be city for API

// function to grab data from breweries by city
const apiUrlCity = `https://api.openbrewerydb.org/breweries?by_city=saint_louis&per_page=6`

fetch(apiUrlCity)
    // console.log(apiUrlCity);
    .then(function(response){return response.json()})
    .then(function(data){
        console.log(data)
        // variables for data information
        let name1 = data[data.length-6].name;
        let name2 = data[data.length-5].name;
        let name3 = data[data.length-4].name;
        let name4 = data[data.length-3].name;
        let name5 = data[data.length-2].name;
        let name6 = data[data.length-1].name;
        console.log(name1);
        // let type = data.brewery_type;
        let type1 = data[data.length-6].brewery_type;
        let type2 = data[data.length-5].brewery_type;
        let type3 = data[data.length-4].brewery_type;
        let type4 = data[data.length-3].brewery_type;
        let type5 = data[data.length-2].brewery_type;
        let type6 = data[data.length-1].brewery_type;
        console.log(type1);
        // let area = data.street + " , " + data.city + " , " + data.state;
        let area1 = data[data.length-6].street + " , " + data[data.length-6].city + " , " + data[data.length-6].state;
        let area2 = data[data.length-5].street + " , " + data[data.length-5].city + " , " + data[data.length-5].state;
        let area3 = data[data.length-4].street + " , " + data[data.length-4].city + " , " + data[data.length-4].state;
        let area4 = data[data.length-3].street + " , " + data[data.length-3].city + " , " + data[data.length-3].state;
        let area5 = data[data.length-2].street + " , " + data[data.length-2].city + " , " + data[data.length-2].state;
        let area6 = data[data.length-1].street + " , " + data[data.length-1].city + " , " + data[data.length-1].state;
        console.log(area1);
        // let web = data.website_url;
        let web1 = data[data.length-6].website_url;
        let web2 = data[data.length-5].website_url;
        let web3 = data[data.length-4].website_url;
        let web4 = data[data.length-3].website_url;
        let web5 = data[data.length-2].website_url;
        let web6 = data[data.length-1].website_url;
        console.log(web1);

        // append each numbered object into container

        // append each

    })

// function to grab data from city and display on page
// 
// append each numbered object into individual container
// append each individual container into parent container in column form
// Make cards clickable to google map link 

// Google Map API to display info from brewery/near me results


// button action to relay API data from Near Me


// Append map data to page on click of brewery


// 