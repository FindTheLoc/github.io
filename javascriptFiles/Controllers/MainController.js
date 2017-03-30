
/*global angular */

app.controller('MainController', ['$scope', function ($scope) {

    google.maps.event.addDomListener(window, 'load', intilize);

    function intilize() {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtautocomplete'));

        //Παίρνω όλες τις πληροφορίες της τοποθεσίας
        var place = autocomplete.getPlace();

        var service = new google.maps.places.PlacesService(document.createElement('div'));

        autocomplete.addListener('place_changed', function () {
            var place = autocomplete.getPlace();
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            var location = new google.maps.LatLng(lat, lng);

            //ksana init ton pinaka otan allazo topothesia
            $scope.places = [];

            var request = {
                location: location,
                radius: '500',
                type: ''

            };

            service.nearbySearch(request, callback);

            function callback(results, status, pagination) {

                angular.forEach(results, function (place, index) {

                    //sto img vale mia default gia osa den exoun
                    var temp = {
                        'name': place.name,
                        'types': place.types,
                        'img': "images/noAvailable.png"
                    };


                    //den exoun ola photos

                    if (place.photos != null) {

                        temp.img = place.photos[0].getUrl({'maxWidth': place.photos[0].width, 'maxHeight': place.photos[0].height});                
                        //temp.img = place.photos[0].getUrl({'maxWidth': 200,'maxHeight': 200});

                    }

                    $scope.places.push(temp);

                });

                $scope.$apply();

                if (pagination.hasNextPage)
                    pagination.nextPage();

            }

        })
    }
}]);