

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 7.568642298506112, lng: 4.892905201342729},
      zoom: 16,
      mapId: 'fa84f82e225f8738',
      fullscreenControl: false,
      streetViewControl: false,
    });

    // listen for click on map (click on the map and you have the default icon)

    function defaultMarker(props) {
      let icon = new google.maps.Marker({
        position: props.coords,
        map:map,
      })
    }
    google.maps.event.addListener(map, 'click', function(event) {
      defaultMarker({coords:event.latLng});
    });

    // constructing a loop for the static features

    const locations = [
      [
        "T-rex",
        7.565491912738479, 
        4.894652459740789,
        "images/T-rex.png",
        58,
        51
      ],
      [
        "sauropod",
        7.568586479272499, 
        4.889425100589671,
        "images/sauropod.png",
        58,
        51
      ],
      [
        "jurassic-park",
        7.56871384441466, 
        4.897019160026347, 
        "images/jurassic-world.png",
        88,
        81
      ],
      [
        "hatchery",
        7.564564162099583, 
        4.889657339224083, 
        "images/egg.png",
        58,
        51
      ],
      [
        "dinosaur",
        7.572541533213208, 
        4.890487348432182, 
        "images/dinosaur.png",
        48,
        41
      ],
      [
        "dinors",
        7.573543165792393, 
        4.895286966896403,
        "images/dinors.png",
        58,
        51
      ]
    ];

    for (let i = 0; i < locations.length; i++) {
      const currMarker = locations[i];
      const marker = new google.maps.Marker({
        position: {lat: currMarker[1], lng: currMarker[2]},
        map,
        title: currMarker[0],
        icon: {
          url: currMarker[3],
          scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
        },
        animation: google.maps.Animation.DROP
      });

      const inflowindow = new google.maps.InfoWindow({
        content: currMarker[0],
      });

      marker.addListener("click", () => {
        inflowindow.open(map, marker);
      });
    }

}
