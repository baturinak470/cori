jQuery(document).ready(function ($) {

	// Show the login dialog box on click
	$('body').on('click','a#show_login',function (e) {
	//$('a#show_login').on('click', function (e) {
		$('body').prepend('<div class="login_overlay"></div>');
		$('form#login').fadeIn(500);
		$('div.login_overlay, form#login a.close').on('click', function () {
			$('div.login_overlay').remove();
			$('form#login').hide();
		});
		e.preventDefault();
	});

	// Perform AJAX login on form submit
	$('form#login').on('submit', function (e) {
		e.preventDefault();
		console.log('show')
		$('form#login p.status').show().text(ajax_login_object.loadingmessage);
		$.ajax({
			type    : 'POST',
			dataType: 'json',
			url     : ajax_login_object.ajaxurl,
			data    : {
				'action'  : 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
				'username': $('form#login #username').val(),
				'password': $('form#login #password').val(),
				'security': $('form#login #security').val()
			},
			success : function (data) {
				$('form#login p.status').text(data.message);
				if (data.loggedin == true) {
					setTimeout(
						function () {
							document.location.href = $('form#login #redirect').val();
						}, 500);
					//document.location.href = $('form#login #redirect').val();
				}
			}
		});

	});

});