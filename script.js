mapboxgl.accessToken = 'pk.eyJ1IjoibmRyYWZrZSIsImEiOiJja3YxN2p6Z2o3dG5jMnBtYWphZnF5OTI3In0.9Uli_h3O8plN1PG7YhaJew';


const successLocation = (position) => {
    console.log(position)
    mapSetup([position.coords.longitude, position.coords.latitude])
}

const errorLocation = (position) => {
    console.log(position)
    mapSetup([-87.6, 41.8])
}

const mapSetup = (center) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');  
        
        const directions = new MapboxDirections({
            accessToken: 'pk.eyJ1IjoibmRyYWZrZSIsImEiOiJja3YxN2p6Z2o3dG5jMnBtYWphZnF5OTI3In0.9Uli_h3O8plN1PG7YhaJew'
          });
          map.addControl(directions, 'top-left');

          

}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});