//create map
const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15);

//create and tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// create and add marker

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = event.latlng.lat;
  document.querySelector("[name=lng]").value = event.latlng.lng;

  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add compo de fotos

function addPhotoField() {
  //pegar container
  const container = document.querySelector("#images");
  //duplicar .new-image ultima imagem adicionada
  const fieldsContainer = document.querySelectorAll(".new-upload");

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //length = valor total, quando nao se sabe o valor (-1 = 0)
  const input = newFieldContainer.children[0];
  //verificar se o campo esta vazio, se sim, nao add ao container
  if (input.value == "") {
    return;
  }

  input.value = "";
  container.appendChild(newFieldContainer);
  //acressentando as imagens ao container
}

//FUNÇAO DE LIMPAR CAMPO

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
  //deletando campo a partir do pai
}

//BOTAO DE SIM OU NAO
function toggleSelect(event) {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //retirar a class active do botoes

  //add .active ao botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
  //atualizar o meu input hidden com o valor selecionado (1,0 html)
}
