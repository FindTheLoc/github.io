app.controller('MainController', ['$scope', 'translateFactory', function ($scope, translateFactory) {

    google.maps.event.addDomListener(window, 'load', intilize);

    function intilize() {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('txtautocomplete'));

        var place = autocomplete.getPlace();

        $scope.categories = [];
        $scope.deletedTypeList = [];
        $scope.checkboxValue = true;
        var storeObj = [];
        var translateArray = [];

        var service = new google.maps.places.PlacesService(document.createElement('div'));

        autocomplete.addListener('place_changed', function () {
            var place = autocomplete.getPlace();
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            var location = new google.maps.LatLng(lat, lng);

            $scope.places = [];

            var request = {
                location: location,
                radius: '500',
                type: ''

            };

            service.nearbySearch(request, callback);

            // callback to placeApi to get all images

            function callback(results, status, pagination) {

                angular.forEach(results, function (place, index) {

                    // each call has 3 properties name,types,img

                    var temp = {
                        'name': place.name,
                        'types': place.types,
                        'img': "myStyleFile/images/noAvailable.png"
                    };



                    if (place.photos != null) {

                        temp.img = place.photos[0].getUrl({
                            'maxWidth': place.photos[0].width,
                            'maxHeight': place.photos[0].height
                        });

                    }

                    //push the objects from PlaceApi respond in the  $scope.places array
                    $scope.places.push(temp);


                    /* 
                    @param {string} place.types -iclude the types from each object which contained in $scope.place array
                    @param {int} key - is the position which strings(types) have in the array
                    */

                    angular.forEach(place.types, function (value, key) {
                        // translate the types calling translateFactory
                        translateArray.push(translateFactory.translateEnglishToGreek(value));
                    })

                    
                    angular.forEach(translateArray, function (value, key) {

                        //εδω δημιουργω την λιστα με τους τυπους των checkbox που θα εμφανισω στην html
                        if (!$scope.categories.includes(translateArray[key]))
                            $scope.categories.push(translateArray[key]);
                    })

                    /* 
                    @param {boolean} value - has true if checkbox is checked or false if it is not
                    @param {string} categor - get the text from checkboxes
                    */

                    $scope.change = function (value, categor) {
                        if (!value) {

                            // create an array with all checkbox's types which have been deleted

                            $scope.deletedTypeList.push(translateFactory.translateGreeksToEnglish(categor));

                            /* 
                            @param {object} $scope.places - has all objects which contains images and informations about the places
                            @param {object} value - is exacly the same with $scope.places
                            @param {int} indexkey - is the position which objects have in the array
                            */

                            angular.forEach($scope.places, function (value, indexkey) {
                                angular.forEach($scope.deletedTypeList, function (item, key) {

                                    if (value.types.includes($scope.deletedTypeList[key])) {

                                        //store the objects from $scope.places in array in storeObj array before being deleted
                                        storeObj.push(value);
                                        $scope.places.splice(indexkey, 1);

                                    }
                                })
                            })

                        } else {

                            //@param {int} findIt keeps the type's position which we want to delete it
                            var findIt = $scope.deletedTypeList.indexOf(categor);
                            $scope.deletedTypeList.splice(findIt, 1);

                            angular.forEach($scope.places, function (valuePlace, indexkey) {
                                angular.forEach(storeObj, function (value, key) {

                                    //retrieve the storeObj array and add the object which is not exist in $scope.place array 
                                    if (!$scope.places.includes(value))
                                        $scope.places.push(value);
                                })
                            })
                        }
                    };

                });

                $scope.$apply();

                // if we have more results than 20 then load them
                if (pagination.hasNextPage)
                    pagination.nextPage();
            }
        })
    }

}]);