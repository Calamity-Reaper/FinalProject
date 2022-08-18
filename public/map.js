function initMap() {
    const mapOptions = {
        center: {lat: 50.45554374810055, lng:30.474308631833363},
        zoom: 18
    };
    const map = new google.maps.Map(document.querySelector('#map'), mapOptions);
    const marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: 'This is my university'
    });

    const info = new google.maps.InfoWindow({
        content: '<h3>This is my university</h3>'
    })

    marker.addEventListener('click', () => {
        info.open(map, marker);
    });
}

window.initMap = initMap;