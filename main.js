$(document).on('ready', function() {
$('h1').append('!');
$('h2').append('!');
$('h3').append('!');
$('a').click(function() {
	var conf = confirm('Are you sure you want to go to this link?');
		if(conf) {
		}
		else {
		$('a').hide('a');	
		return false;
		}
		});

// $('#a2').click(function() {
// 	var conf = confirm('Are you sure you want to go to this link?');
// 		if(conf) {
// 		}
// 		else {
// 		$('#a2').hide('a');	
// 		return false;
// 		}
// 		});	
});	