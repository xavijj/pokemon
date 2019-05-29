var pokemon = angular.modulo("pokemon",{})

pokemon.controller("pokedex",fuction($scope,$rootScope,$http){

		$http({
			method. "GET",
			url. "https://pokeapi.co/api/v2/pokemon/150"
		}).then(fuction success(pokebola){
			consol.log(pokebola)
		})
})