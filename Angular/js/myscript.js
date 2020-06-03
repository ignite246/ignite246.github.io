const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp', []);

app.controller('MyController', ($scope,$http) => {
   
    //this is controller

    $scope.title = "Stay Home Stay Safe";

    //calling api
    $http.get(URL).then(
        (response) => { 
            console.log(response);
            $scope.all_data = response.data;
        },
        (error) => {
            console.log(error); 
        });
    
    
    //get country data

    $scope.get_countrywise_data = () => {
        
        let country = $scope.country_name;
        if (country == "") {
            $scope.c_data = undefined;
            return;
        }

        $http.get(`${URL}/countries/${country}`).then(
            (response) => {
                console.log(response);
                $scope.c_data = response.data;
            },
            (error) => {
                console.log(error);
             }
        );
    }

});