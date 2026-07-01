// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // container ID — matches <div id="map">
    style: 'https://api.maptiler.com/maps/satellite-v4/style.json?key=ds2Exe1nx0NLi5h5nbM1', // style URL
    center: [-118.3037666475374, 34.06422841905535], // starting position [lng, lat]
    zoom: 10 // starting zoom level
});


// Add a marker to the map
//const marker = new maplibregl.Marker()
    //.setLngLat([-118.444, 34.0709])
    //.setPopup(new maplibregl.Popup({ offset: 25 })
    //    .setHTML('<div class = "awesomePopup"> Math Sciences Building </div>'))
    //.addTo(map);

// marker 2
//const marker2 = new maplibregl.Marker()
   // .setLngLat([ -118.44143494834834, 34.075165462418006])
    //.setPopup(new maplibregl.Popup({ offset: 25 })
     //   .setHTML('<div class = "awesomePopup2"> YRL is my favorite library on campus and contains Cafe 451.</div> '))
  //  .addTo(map);

// marker 3
const marker3= new maplibregl.Marker()
    .setLngLat([ -118.44443179284639, 34.06968269824631])
    .setPopup(new maplibregl.Popup({ offset: 25 })
        .setHTML('<div class="awesomePopup3"> Engineering VI contains the research lab I work at during the school year. </div>'))
    .addTo(map);

const marker4= new maplibregl.Marker()
    .setLngLat([ -118.23945536609568, 34.04954663918137])
    .setPopup(new maplibregl.Popup({ offset: 25 })
        .setHTML('<div class="awesomePopup4"> <a href="https://www.goforbroke.org/">Go For Broke National Education Center</a> is where I interned in Downtown LA Little Tokyo. </div>'))
    .addTo(map);