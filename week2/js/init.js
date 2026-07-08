// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID
    style: 'https://api.maptiler.com/maps/streets/style.json?key=wsyYBQjqRwKnNsZrtci1', // Your style URL
    center: [-118.30717082653011, 34.057320226474836], // Starting position [lng, lat]
    zoom: 17 // Starting zoom level
});


function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title;
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo({
            center: [lng,lat],
        })
    })
    document.getElementById("contents").appendChild(newButton);
}

function addMarker(lat,lng,title,message,linky){
    let popup_message = `<div class=poppy><h2>${title}</h2> <h3>${message}</h3> <img src=${linky}> </div>`
    new maplibregl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup().setHTML(popup_message))
        .addTo(map)
    createButtons(lat,lng,title);
    return message
}

addMarker(34.057320226474836, -118.30717082653011, "DAMO", "Order the strawberry matcha, they make fresh puree in-house. All-time favorite.", "https://s3-media0.fl.yelpcdn.com/bphoto/UOscvNK13Wxxr7wvA0Bk7g/348s.jpg")
addMarker(34.061607026544976, -118.30575738861, "Alchemist Coffee Project", "Mocha has a strong chocolate flavor, matcha is very roasty. Lots of space to work/chat with friends.", "alchemist.jpeg")
addMarker(34.05258562677317, -118.30223373846741, "rōk", "Drinks are small, line is insane, but still worth it now and then. Hōjicha was nice.", "https://s3-media0.fl.yelpcdn.com/bphoto/LARmMbIhI8A_ivUsMno63Q/348s.jpg")
addMarker(32.914588287069066, -117.14609097517517, "Matcha Cafe Maiko", "Not as good as K-town but best matcha in my hometown.", "https://bb6f1da597800283db5b.cdn6.editmysite.com/uploads/b/bb6f1da597800283db5b34af5b29e8c851f511cc7fa22d23e9be2be6ac6eaed2/Strawberry%20Matcha%20Latte_1783178448.jpg?width=2400&optimize=medium")
addMarker(32.91507354589893, -117.13010969051655, "Bei Yuan Tea and Boba", "Milk and iced teas, and enormous seating area.", "https://s3-media0.fl.yelpcdn.com/bphoto/9KA3mg7tOeaRTc5o81pJxw/348s.jpg")
addMarker(32.83245939431433, -117.14685067517827, "Camellia Rd Tea Bar", "Great if you like strong tea flavor, honey boba legendary.", "https://kirbiecravings.com/wp-content/uploads/2017/07/camellia-road-3-700x673.jpg")
addMarker(36.122222999527274, -115.1691113597044, "Trà Viet Coffee and Tea", "Incidental finding but great great great local business.", "https://s3-media0.fl.yelpcdn.com/bphoto/i_IrBLPcJPvNJTdc5FOjvQ/348s.jpg" )