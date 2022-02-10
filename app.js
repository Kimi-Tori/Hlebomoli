$(document).ready(function(){
	$('.radio-button input:checked').parent().parent().parent().css('border', '1px solid #d15b0a');

	$('.radio-button input').focus(
		function(){
			$('.dilivery__form').css('border', '1px dashed #f0e4ca');
			$(this).parent().parent().parent().css('border', '1px solid #f0e4ca');
			// $(this).parent().parent().parent().css( 'bacground-color', '#000');
		});
});