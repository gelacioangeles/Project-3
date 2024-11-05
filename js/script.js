let map, infoWindow;

function initMap() {
  // Initializing the map centered on IIT
  const IIT = { lat: 41.831299, lng: -87.627274 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: IIT,
    zoom: 10,
  });
