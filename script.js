$(function() {

var planets = [
	{name: 'mercury', distance: 36},
	{name: 'venus', distance: 67.2},
	{name: 'earth', distance: 93},
	{name: 'mars', distance: 141.6},
	{name: 'jupiter', distance: 483.6},
	{name: 'saturn', distance: 886.7},
	{name: 'uranus', distance: 1784.0},
	{name: 'neptune', distance: 2794.4}
	];
});

/*This handler is for the new-item button. It should hide the table and show the form. 
It should set a handler for the form's submit button.*/

$(function() {

	$('#addNew').on('click', function() {
        event.preventDefault();
		$('#sec02').fadeToggle(100);
	})
});

/* This function creates a table row (tr) for each object in the array, with a cell (td) 
for each property to be displayed. Append each of these rows to the table body.*/

$(function() {

var tableBody = $('#makeTable');
for (var i = 0; i < planets.length; i++) {
	var celestialBody = planets[i];
	var $row = $('<tr></tr>');
	row.append($('<td></td>').text(planets[i].name));
	row.append($('<td></td>').text(planets[i].distance));
	tableBody.append($row);
}

});


/* This handler is for the submit button that creates an object using the form data and 
adds that object to the array. Then it should call the first function you wrote to 
recreate the table with the updated database and show that table, hiding the form.*/

$(function () {

    $('#add').on('click', function () {
        event.preventDefault();
        var $table = $('#dataTable');
        var $tr = $('#sec01').find('tr').first();
        //$table.find("tbody").append($tr);
        $table.row.add($tr);
    });
});




