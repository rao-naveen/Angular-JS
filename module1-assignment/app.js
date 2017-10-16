(function (){
  'use strict';

  angular.module('LaunchCheck',[])
  .controller('LunchCheckController', launchController);
  
  launchController.$inject = ['$scope'];
  
  function launchController($scope){
    $scope.checkTooMuch = function(){
      if($scope.items == "" || $scope.items == undefined){
      $scope.isItTooMuch = 'Please enter data first';
      return;
    }

    var splits = $scope.items.split(',');
    if(splits.length == 0){
      $scope.isItTooMuch = 'Please enter data first';
      return;
    }

    var nonEmpty = 0;
    for(var i = 0; i < splits.length; ++i)
    {
      if(splits[i].length > 0){
        nonEmpty++;
      }
    }
    if(nonEmpty <= 3){
      $scope.isItTooMuch = 'Enjoy!';
    }
    else{
      $scope.isItTooMuch = 'Too much!';
    }
  }};
})();
