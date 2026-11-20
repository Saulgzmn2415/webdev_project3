function initMap() {
  const mapProp = {
    center: new google.maps.LatLng(41.8781, -87.6298),
    zoom: 10
  };

  const map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapProp
  );
}