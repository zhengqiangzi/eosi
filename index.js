import scrollTo from 'jquery.scrollto';
var style=require('screen')

$(document).ready(function(){

	$('.jumpMenuItem').click(function(){

		var g=$(this).parent().index();
			g=g+1;
		scrollTo($('.page'+g),500);

		$('.toggleButton').removeAttr('checked')

	})


	$('.toggleButton').change(function(){

		var flag=$(this).prop('checked');
		if(flag==true)
		{
			$(document.body).addClass('showMenu')
		}else{
				
			$(document.body).removeClass('showMenu')
		}
	})
})  