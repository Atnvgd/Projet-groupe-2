import './map.html';
import './map.css';

if (Meteor.isClient) {
  var MAP_ZOOM = 15;

  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.map.onCreated(function() {
    var self = this;

    GoogleMaps.ready('map', function(map) {
      var marker;

      // Create and move the marker when latLng changes.
      self.autorun(function() {
        var latLng = Geolocation.latLng();
        if (! latLng)
          return;

        // If the marker doesn't yet exist, create it.
        if (! marker) {
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(latLng.lat, latLng.lng),
            map: map.instance
          });
        }
        // The marker already exists, so we'll just change its position.
        else {
          marker.setPosition(latLng);
        }

        // Center and zoom the map view onto the current position.
        map.instance.setCenter(marker.getPosition());
        map.instance.setZoom(MAP_ZOOM);

        afficherRepere(map); 
      });
    });
  });

  Template.map.helpers({
    geolocationError: function() {
      var error = Geolocation.error();
      return error && error.message;
    },
    mapOptions: function() {
      var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      if (GoogleMaps.loaded() && latLng) {
        return {
          center: new google.maps.LatLng(latLng.lat, latLng.lng),
          zoom: MAP_ZOOM
        };
      }
    }
  });
}

function afficherRepere (map) {
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.588838, 6.462147),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.587695, 6.460742),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.592151, 6.465320),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.600247, 6.486734),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.616922, 6.489923),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.611962, 6.507475),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.519409, 6.579724),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.518833, 6.583779),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.555944, 6.477888),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.572100, 6.454026),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.505863, 6.492944),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.515669, 6.510732),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.580876, 6.543656),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.610951, 6.524708),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.555820, 6.544863),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.524450, 6.586657),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.482358, 6.423359),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.522920, 6.625164),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.551110, 6.430076),
    map: map.instance
  }) 
  marker = new google.maps.Marker({
    icon : 'http://maps.google.com/mapfiles/marker_green.png',
    position: new google.maps.LatLng(46.528302, 6.443449),
    map: map.instance
  })
}

