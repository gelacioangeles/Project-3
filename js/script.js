let map, infoWindow;

function initMap() {
  // Initializing the map centered on IIT.
  const IIT = { lat: 41.831299, lng: -87.627274 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: IIT,
    zoom: 10,
  });
  
  // Creating a marker for IIT.
  const markerIIT = new google.maps.Marker({
    position: IIT,
    map,
    title: "Illinois Institute of Technology",
  });

  // Made the content structured for the info window.
  const contentString = `
    <div style="color: black;">
      <h1>Illinois Institute of Technology</h1>
      <p>Illinois Institute of Technology (IIT) is a private university in Chicago.</p>
    </div>`;
  
  const infowindowIIT = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "IIT",
  });
  
  // This shows the info window on marker hover.
  markerIIT.addListener("mouseover", () => {
    infowindowIIT.open(map, markerIIT);
  });
  
  // Initializes a InfoWindow for Geolocation.
  infoWindow = new google.maps.InfoWindow();
  
  // Creating a button for the user's current location.
  const locationButton = document.createElement("button");
  locationButton.textContent = "Find Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);