import style from 'screen';
import scrollTo from 'jquery.scrollto';

import $ from 'jquery';

$(document).ready(function(){

	$('.jumpMenuItem').click(function(){

		var g=$(this).parent().index();
			g=g+1;
		scrollTo($('.page'+g),500);

	})
})