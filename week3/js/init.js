let mapOptions = {"centerLngLat": [-117.190096,
                    32.771383], "startingZoomLevel": 8};
console.log(mapOptions.centerLngLat);
console.log(mapOptions.startingZoomLevel);

// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: mapOptions.centerLngLat, // Starting position [lng, lat]
    zoom: mapOptions.startingZoomLevel // Starting zoom level
});

function addMarker(lat,lng,title,message){
    let popup_message = `<div class =poppy><h2>${title}</h2> <h3>${message}</h3></div>`
    new maplibregl.Marker({color:"goldenrod"})
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup()
            .setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat], zoom:12
        })
    })
    document.getElementById("places").appendChild(newButton);
}

function processData(results) {
    //console.log(results);
    results.features.forEach(feature => {
        console.log(feature)
        addMarker(feature.geometry.coordinates[1], feature.geometry.coordinates[0], feature.properties.title, feature.properties.message)
    })
};

map.on('load', function(){
    fetch("untitled.geojson")
        .then(response => 
            response.json())
        .then(data => {
            processData(data);
        });
});