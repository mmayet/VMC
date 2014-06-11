var top_menu_height = 0;
jQuery(function($) {
        $(document).ready( function() {

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
            'callback=initialize';
        document.body.appendChild(script);
    });
});

function initialize() {
    var myLatlng = new google.maps.LatLng(33.867218,-117.933460);
    var mapOptions = {
      zoom: 17,
      center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'VMC Masjid'
    });
}

/*
$(".jumbotron").mouseenter(function() {
  $( this ).css("background-color", "rgb(166, 206, 244)");
});

$(".jumbotron").mouseleave(function() {
  $( this ).css("background-color", "rgb(217, 233, 247)");
});
*/
