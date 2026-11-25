
function initMap() {
  const kotor = { lat: 42.4247, lng: 18.7712 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: kotor
  });

  // Feature 1: Marker
  const marker = new google.maps.Marker({
    position: kotor,
    map: map,
    title: "Kotor, Montenegro"
  });

  // Feature 2: Information window
  const infoWindow = new google.maps.InfoWindow({
    content: "Kotor is a beautiful coastal town in Montenegro!"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });

  // Feature 3: Circle
  const circle = new google.maps.Circle({
    map: map,
    center: kotor,
    radius: 1000,
    fillColor: "#b95e83",
    fillOpacity: 0.2,
    strokeColor: "#b95e83"
  });
}

// Questions button
document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("questions");

  if (button) {
    button.addEventListener("click", function() {
      alert("If you have questions, contact me at:\namilosevic705@gmail.com");
    });
  }
});
