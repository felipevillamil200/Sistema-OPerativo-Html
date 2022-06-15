	app.controller('blocdenotas', function($rootScope,$scope,$localStorage,$sessionStorage) {
		$scope.texto = "hello";

		angular.element(document).ready(function() {
			$scope.datos = $localStorage.datos;

		});


		$scope.guardarNota = function() {
			$scope.info = "Guardando...";
			$localStorage.datos = $scope.datos;
			$scope.info = "Nota almacenada";
		};


	});