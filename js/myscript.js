var top_menu_height = 0;
jQuery(function($) {
        $(document).ready( function() {

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB4VAX1r5GUTB8ICQsisbSZb4UQojgMNSw&callback=initMap"
        document.body.appendChild(script);
    });
});

function initMap() {
        var myLatlng = new google.maps.LatLng(33.867218,-117.933460);
        var mapOptions = {
          zoom: 13,
          center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title:"VMC Masjid"
        });

        marker.setMap(map);
}

/*
$(".jumbotron").mouseenter(function() {
  $( this ).css("background-color", "rgb(166, 206, 244)");
});

$(".jumbotron").mouseleave(function() {
  $( this ).css("background-color", "rgb(217, 233, 247)");
});
*/
