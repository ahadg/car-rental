var longitud;
var latitud;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    var crd = pos.coords;
    latitud = crd.latitude;
    longitud = crd.longitude;
    //   document.getElementById("latitud").innerHTML = latitud
    //   document.getElementById("longitud").innerHTML = longitud
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: latitud,
            lng: longitud,
        },
        zoom: 14,
    });
}

function error(err) {
    document.getElementById('map').innerHTML = 'ERROR(' + err.code + '): ' + err.message;
}

function initMap() {
    navigator.geolocation.getCurrentPosition(success, error);
}
