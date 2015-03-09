(function (undefined) {

    var pokemonApp = {};

	// Grab inputs and button for speech-to-text
    var form                 = document.querySelector('#player-form'),
        input                = document.querySelector('#player-input'),
        playerElement        = document.querySelector('#player-element'),
        xPokemon             = document.querySelector('#x-pokemon'),
        btn_changeAccent     = document.querySelector('#btn-change-accent'),
        radialButtonTemplate = document.querySelector("#radial-button-template");

	// Take text from input & set it as the text that the speaker will say.
	// Set the name of the pokemon, which angular will then grab from the pokemon DB 
	input.addEventListener('input', function (e) {
		playerElement.setAttribute('text', input.value);
		xPokemon.name = input.value;
	});

	// Say the text when button is pressed
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		playerElement.speak();
		console.log(radialButtonTemplate);
		radialButtonTemplate.changeAccent();
	});


	changeAccent       = function () {
		var accentAttr = playerElement.getAttribute("accent");
		console.log(accentAttr);
		var Newaccent  = playerElement.setAttribute("accent", "en-GB");
		var player     = document.querySelector('#player-element');
		playerAccent   = player.getAttribute("accent");
		console.log(playerAccent);
	};

	// Event listener for changing accents
	btn_changeAccent.addEventListener('submit', changeAccent());

    // Shadow DOM
	//var shadow = document.querySelector("#radial-button-template");
    //var template = document.querySelector("#")

	//var shadow = this.$.x-radial-buttons;
    //console.log(shadow);


})();

