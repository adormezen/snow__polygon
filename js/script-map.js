var map = L.map('map').setView([64.54915263791526, 40.597457536074046], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
}).addTo(map);

//

//Свойства для маркера
var LeafIcon = L.Icon.extend({
    options: {
        /* shadowUrl: 'images/marker-icon.png', */
        iconSize:     [60, 60], 
        /* shadowSize:   [50, 50], */
        iconAnchor:   [30, 60],
        /* shadowAnchor: [4, 62], */
        popupAnchor:  [0, -60]
    }
});


//иконки для маркеров, можно любые svg png
var areaIcon = new LeafIcon({iconUrl: '/images/area.svg'});
var trIcon = new LeafIcon({iconUrl: '/images/transparent.svg'})




//маркеры
var bpu = L.marker([64.54915263791526, 40.597457536074046], {icon: areaIcon}).bindPopup('Снежный полигон').addTo(map);


//назначаем прозрачную иконку для якоря метки из html
function markerMitTr(pos,txt) {
    var markerMitTr = L.marker(pos, {icon:trIcon})
              .addTo(map);
    markerMitTr.bindPopup(txt);
    markerMitTr.openPopup();
    map.panTo(new L.LatLng(pos[0],pos[1]));
}


/* function markerMitBridge(pos,txt) {
    var markerMitBridge = L.marker(pos, {icon:bridgeIcon})
              .addTo(map);
    markerMitBridge.bindPopup(txt);
    markerMitBridge.openPopup();
    map.panTo(new L.LatLng(pos[0],pos[1]));
}

function markerMitShip(pos,txt) {
    var markerMitShip = L.marker(pos, {icon:shipIcon})
              .addTo(map);
    markerMitShip.bindPopup(txt);
    markerMitShip.openPopup();
    map.panTo(new L.LatLng(pos[0],pos[1]));
}

        */     


