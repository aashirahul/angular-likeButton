import angular from 'angular';

angular.module('ButtonApp',[])
	   .controller('CountController',['$scope',function($scope){
	   	$scope.count = 0;
	   	$scope.text ='add';
	   	$scope.toggleMethod = function(){
	   		if($scope.text == 'add'){
	   			$scope.text = 'substract';
	   		}else {
	   			$scope.text = 'add';
	   		}
	   	}
	   	
	   	$scope.incrementCount = function(){
	   		if($scope.text == 'add'){
	   			$scope.count = $scope.count +1;
	   		} else {
	   			$scope.count = $scope.count -1;
	   	}}
	   }]);