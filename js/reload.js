$(document).ready(function() {
	$('#test-button').click(function() {
		document.getElementById('iframe').contentDocument.location.reload(true);
	});
});