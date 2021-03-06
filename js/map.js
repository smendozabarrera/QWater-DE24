function initialize() {

    //Map parametrs
    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng(21.8831712, -102.3613399),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        styles:[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#00b2ff"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
    }

    //map
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //category
    var cook = 'img/icon/01.png';

    //Marker positions
    var point1 = new google.maps.LatLng(19.39068, -99.2836984);
    var point2 = new google.maps.LatLng(20.6737777, -103.4054535);
    var point3 = new google.maps.LatLng(19.0400572, -98.2630055);

    //markers
    var marker1 = new google.maps.Marker({
        position: point1,
        map: map,
        category: cook,
        icon: cook,
        title: "Mexico City"
    });

    var marker2 = new google.maps.Marker({
        position: point2,
        map: map,
        category: cook,
        icon: cook,
        title: "Guadalajara"
    });

    var marker2 = new google.maps.Marker({
        position: point3,
        map: map,
        category: cook,
        icon: cook,
        title: "Puebla"
    });


    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker1, 'click', goToLink);

    //Map parametrs
    var mapOptions2 = {
        zoom: 14,
        center: new google.maps.LatLng(41.154, -73.328),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);

    //category
    var cook2 = 'img/icon/01.png';
    var sport2 = 'img/icon/02.png';
    var game2 = 'img/icon/03.png';
    var eco2 = 'img/icon/04.png';
    var shop2 = 'img/icon/05.png';
    var study2 = 'img/icon/06.png';
    var drink2 = 'img/icon/07.png';
    var money2 = 'img/icon/08.png';
    var bus2 = 'img/icon/09.png';

    //positions
    var point122 = new google.maps.LatLng(41.154, -73.328);


    //markers

    var marker122 = new google.maps.Marker({
        position: point122,
        map: map2,
        category: cook2,
        icon: cook2,
        title: "point122"
    });



    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker122, 'click', goToLink);




    //Map parametrs
    var mapOptions3 = {
        zoom: 14,
        center: new google.maps.LatLng(41.163, -73.337),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map3 = new google.maps.Map(document.getElementById("map3"), mapOptions3);

    //category
    var cook3 = 'img/icon/01.png';
    var sport3 = 'img/icon/02.png';
    var game3 = 'img/icon/03.png';
    var eco3 = 'img/icon/04.png';
    var shop3 = 'img/icon/05.png';
    var study3 = 'img/icon/06.png';
    var drink3 = 'img/icon/07.png';
    var money3 = 'img/icon/08.png';
    var bus3 = 'img/icon/09.png';

    //positions
    var point123 = new google.maps.LatLng(41.163, -73.337);


    //markers

    var marker122 = new google.maps.Marker({
        position: point123,
        map: map3,
        category: shop3,
        icon: shop3,
        title: "point123"
    });



    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker123, 'click', goToLink);

}
