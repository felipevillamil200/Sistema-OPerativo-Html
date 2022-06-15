		var app = angular.module('app',['ngStorage']);

		app.controller('main', function($rootScope,$scope) {

			$scope.items = [];

			angular.element(document).ready(function() {
				// CONFIGURACION INICIAL

				// Funcion de jQuery para hacer un icono sortable (Colocar en otro lugar ajustado)
				$( "#selectable" ).sortable({
			      revert: true
			    });
				// Funcion de jQuery para hacer un icono dragdablle (Arrastrar el icono libremente)
			    $( ".draggable" ).draggable({ scroll: true, snap: true });


			    // Funcion para abrir o cerrar el menu inicio
			    $scope.abrirInicio = function() {
			    	if($('#menu').css('display') == 'none') {
			    		$('#menu').css({
			    			display: 'block'
			    		});
			    	} else {
			    		$('#menu').css({
			    			display: 'none'
			    		});
			    	}
			    };



			    // Funciona de jQuery para configuracion de dialogos (ventanas)
			    $( ".explorer" ).dialog({
			      autoOpen: false,
			      width:'700px',
			      show: {
			        effect: "scale",
			        duration: 100
			      },
			      hide: {
			        effect: "scale",
			        duration: 100
			      },
			      close: $scope.cerrarAplicacion
			    });





			});


			$scope.cerrarAplicacion = function(e) {
			    var ventana = e.target.id;
			   	$scope.items.pop(ventana.substring(2, 20));
			   	console.log($scope.items);
			};
			$scope.abrirAplicacion = function(aplicacion) {
		    	$scope.items.push(aplicacion);
		    	$( "#v-" + aplicacion.currentTarget.id ).dialog( "open" );
		    	console.log($scope.items);
		   	};

		   	$scope.minimizarTarea = function(aplicacion) {
		   		var app = aplicacion.currentTarget.id.substring(2, 20);
		   		if($('#v-' + app).css('display') == 'none') {
			    	$('#v-' + app).css({
			    		display: 'block'

			   		});
			   	} else {
			   		$('#v-' + app).css({
			   			display: 'none'

		    		});
		    	}
		   	};





		});
