    var planets = [
    	{name: 'Mercury', distance: 36},
    	{name: 'Venus', distance: 67.2},
    	{name: 'Earth', distance: 93},
    	{name: 'Mars', distance: 141.6},
    	{name: 'Jupiter', distance: 483.6},
    	{name: 'Saturn', distance: 886.7},
    	{name: 'Uranus', distance: 1784.0},
    	{name: 'Neptune', distance: 2794.4}
    	];

    displayPlanets();

    $('#submit').on('click', addNewPlanet);

//------ Assignment 5: Object List, in-work.

    function displayPlanets() {
        var i, len, planet;
        var tr, td;

    $('#planets').empty();

    for (i = 0, len = planets.length; i < len; ++i) {
        planet = planets[i];

        tr = $('<tr>');

        td = $('<td>');
        td.text(planet.name);
        tr.append(td);

        td = $('<td>');
        td.text(planet.distance);
        tr.append(td);

        $('#planets').append(tr);
    }

        $('#sec01').show();
        //$('#sec02').hide();

    }

//------ Assignment 5: Object List, in-work.

    function addNewPlanet() {

        $('#name').val('');
        $('#distance').val('');

        $('#submit').one('click', addPlanet);
        $('#reset').one('click', displayPlanets);

        $('#sec01').hide();
        $('#sec02').show();

    };

//------ Assignment 5: Object List, in-work.

    function addPlanet() {

        var newPlanet = {
            name: $('#name').val(''),
            age: $('#distance').val('')
        };

        planets.push(newPlanet);

        event.preventDefault();

        displayPlanets();
    }

//------ Assignment 6: Local Storage, in-work.

//work with this: 
//localStorage[ 'AKEY' ] = JSON.stringify( data );
//var data = JSON.parse( localStorage[ 'AKEY' ] );



