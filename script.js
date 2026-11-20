/* Implementing the map and giving it a latitude and longitude that includes the 4 locations nicely. */
function initMap() {
  const mapProp = {
    center: new google.maps.LatLng(41.848367, -87.647628),
    zoom: 12.5
  };

  const map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapProp
  );

  /*Additional feature #1: pinging/pinning the commons at IIT campus*/
  const iitMarker = new google.maps.Marker({
    position: { lat: 41.836162, lng: -87.625488 },
    map: map,
    title: "Illinois Institute of Technology - The Commons"
  });


  /* Additional feature #2: info window on why I marked the commons when the location mark is clicked */
  /* This also takes care of the event listener requirement */
  const infoWindow = new google.maps.InfoWindow({
  content: "<h2>Illinois Tech - The Commons </h2> <p>While waiting on the start time for my next class, this is where I spend most of my time on campus studying and completing assignments before going home. </p>"
  });

  iitMarker.addListener("click", function() {
    infoWindow.open(map, iitMarker);
  });


  /*Additional featue #3: 3 Boxing gyms linked/pinned with a boxing glove icon that is bouncing to make them stand out. */
  const samColMarker = new google.maps.Marker({
    position: { lat: 41.831927, lng: -87.691249 },
    map: map,
    title: "Sam Colonna Boxing",
    animation: google.maps.Animation.BOUNCE,
    icon: {
    url: "images/glove.png",
    scaledSize: new google.maps.Size(40, 40)
    }
  });

  const windCitMarker = new google.maps.Marker({
    position: { lat: 41.853403, lng: -87.650506 },
    map: map,
    title: "Windy City Boxing",
    animation: google.maps.Animation.BOUNCE,
    icon: {
    url: "images/glove.png",
    scaledSize: new google.maps.Size(40, 40)
    }
  });

  const JmhBoxMarker = new google.maps.Marker({
    position: { lat: 41.822045, lng: -87.689877 },
    map: map,
    title: "3 Jmh Boxing",
    animation: google.maps.Animation.BOUNCE,
    icon: {
    url: "images/glove.png",
    scaledSize: new google.maps.Size(40, 40)
    }
  });


  /* Additional feature #4: Description for the Boxing gyms(name and basic info) */
  const infoWindow2 = new google.maps.InfoWindow({
  content: "<h2>Sam Colonna Boxing</h2> <p>2600 W 35th St, Chicago, Il 60632 | Open Mon-Sun | 4.6 Start Review (141)</p>"
  });
  samColMarker.addListener("click", function() {
    infoWindow2.open(map, samColMarker);
  });

  const infoWindow3 = new google.maps.InfoWindow({
  content: "<h2>Windy City Boxing</h2> <p>2150 S Canalport Ave, Chicago, IL 60608 | Open Mon-Sun | 4.9 Start Review (19)</p>"
  });
  windCitMarker.addListener("click", function() {
    infoWindow3.open(map, windCitMarker);
  });

  const infoWindow4 = new google.maps.InfoWindow({
  content: "<h2>3 Jmh Boxing</h2> <p>3932 S Rockwell St, Chicago, IL 60632 | Open Mon-Sun | 5.0 Start Review (24)</p>"
  });
  JmhBoxMarker.addListener("click", function() {
    infoWindow4.open(map, JmhBoxMarker);
  });



}
window.initMap = initMap;

/* Required questions button javascritp code */
const questionBtn = document.getElementById("questionBtn");

if (questionBtn) {
  questionBtn.addEventListener("click", function () {
    alert("If you have questions, contact me at:\nsguzman5@hawk.illinoistech.edu");
  });
}

