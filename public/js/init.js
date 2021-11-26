//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "18 dec 2021 08:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	