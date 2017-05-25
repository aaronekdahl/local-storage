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

//------

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
    $('#sec02').hide();

    }

//-------

    function addNewPlanet() {

        $('#name').val('');
        $('#distance').val('');

        $('#submit').one('click', addPlanet);
        $('#reset').one('click', displayPlanets);

        $('#sec01').hide();
        $('#sec02').show();

    };

//-------
    function addPlanet() {

        var newPlanet = {
            name: $('#name').val(),
            age: $('#distance').val()
        };

        planets.push(newPlanet);

        event.preventDefault();

        displayPlanets();
    }





