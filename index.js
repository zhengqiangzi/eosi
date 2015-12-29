import scrollTo from 'jquery.scrollto';

$(document).ready(function(){

	$('.jumpMenuItem').click(function(){

		var g=$(this).parent().index();
			g=g+1;
		scrollTo($('.page'+g),500);

		$('.toggleButton').removeAttr('checked')

	})
})  