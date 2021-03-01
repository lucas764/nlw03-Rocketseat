const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-5.5115015, -35.2683536], 15);

//create and tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create add and marker
L.marker([-5.5115015, -35.2683536], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;
  const buttons = document.querySelectorAll(".images button");

  /*Remove Class*/
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  //select image

  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  imageContainer.src = image.src;

  /*add class*/
  button.classList.add("active");
}
