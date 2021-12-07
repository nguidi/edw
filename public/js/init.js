//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
		date: "18 dec 2021 08:00:00",
		format: "on"
	}, function() {
		// callback function
	});

	$.getJSON('/employees?$limit=20').then( es => {
		es.data.forEach(e => {
			let $option = $('<option value="'+e._id+'">'+e.name+'</option>')
			$option.data('employee',e)
			$('#available-employees').append($option)
		});
	})

	$.getJSON('/awards?$limit=20').then( as => {
		as.data.forEach(a => {
			let $option = $('<option value="'+a._id+'">'+a.name+'</option>')
			$option.data('award',a)
			$('#available-awards').append($option)
		});
	})

	$('#nominate').click( ev => {

		$('.error-msg').hide();
		let employee = $('#available-employees :selected').data('employee')
		let award = $('#available-awards :selected').data('award')
		let nomination = $('textarea').val()
		let errors = []

		if (employee == undefined) errors.push('Empleado')
		if (award == undefined) errors.push('Premio')
		if (nomination.length < 5) errors.push('Nominación')

		if (errors.length > 0) {
			$('.error-msg').html('Debe completar los campos: <b>'+errors.join('</b> <b>')+'</b>')
			$('.error-msg').show();
		} else {
			$.post('/nominations', { 
				employee: employee,
				award: award,
				nomination: nomination
			}).then( r => {
				$('.menu-items form').hide();
				$('.nomination-complete p').html('Nominaste a <b>'+employee.name+'</b> al premio <b>'+award.name+'</b> satisfactoriamente!')
				$('.nomination-complete').show();
				$('form').trigger("reset");
			});
		}

	})

	$('#new-nomination').click( ev => {
		$('.menu-items form').show();
		$('.nomination-complete').hide();
	})
});	