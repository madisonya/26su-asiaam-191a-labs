// declare variables
let mapOptions = {'centerLngLat': [-171.47593125715548,32.615638008614965],'startingZoomLevel':1}

const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: mapOptions.centerLngLat, // Starting position [lng, lat]
    zoom: mapOptions.startingZoomLevel // Starting zoom level
});

function addMarker(feature){
    console.log("in addMarker function")
    let longitude = feature.lng;
    let latitude = feature.lat;
    let where= feature.Located;
    let popup_message;
    if (feature['Recommend']== 'Yes! I had a great time.')
    {
        popup_message = '<h2>Positive</h2> <h3> Location: ${where}</h3>'
        new maplibregl.Marker({color: "darkolivegreen"})
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    }
    else {
        popup_message = '<h2> Negative </h2> <h3> Location: ${where}</h3>'
        new maplibregl.Marker({color: "firebrick"})
        .setLngLat([longitude, latitude])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    };
    console.log("about to make button")
    createButtons(latitude,longitude,where);
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
            zoom: 5
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

const dataUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSYK_JCbJsptLWrx9Jj5NRRywxgYneyX0POQ93RqVg3Awzd-hctSNNDddKqGmAYdlyskivp82l5zROD/pub?output=csv'

// When the map is fully loaded, start adding GeoJSON data
map.on('load', function() {
    // Use PapaParse to fetch and parse the CSV data from a Google Forms spreadsheet URL
    Papa.parse(dataUrl, {
        download: true, // Tells PapaParse to fetch the CSV data from the URL
        header: true, // Assumes the first row of your CSV are column headers
        complete: results => {
            // Process the parsed data
            processData(results.data) // Use a new function to handle CSV data
        }
    });
});

function processData(results){
    console.log(results) //for debugging: this can help us see if the results are what we want
    results.forEach(feature => {
        //console.log(feature) // for debugging: are we seeing each feature correctly?
        // assumes your geojson has a "title" and "message" attribute
        addMarker(feature);
    });
};
