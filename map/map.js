function initMap() {
    var people = loadPeople();

    var myLatlng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 35, lng: -23},
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    });

    var markers = [];
    for(var i = 0; i < people.length; i ++){
        markers.push(new google.maps.Marker({
            position: people[i].coords,
            map: map,
            title: people[i].location,
            icon: 'pin.png',
            itemID: people[i].id,
            pName: people[i].name
          }));
        markers[i].addListener('click', function(event) {
            modals[this.itemID].showModal();
        });
    }


  }