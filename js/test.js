window.onload=function(){
	var oDiv=document.getElementById("div1");
	var oImg=oDiv.getElementsByTagName("img");
	var oPhoto=document.getElementById("photo_big");
	var oBigimg=oPhoto.getElementsByTagName("img")[1];
	var this_img=new Image();
	var windowWidth=$(window).width();
	$('#div1 img').click(function(){
		$('#photo_big').show();
		$(this_img).load(function(){
			$('#photo_big .big img').attr('src',this_img.src).css('top',0).css('width','600px').css('height','450px').animate({
				opacity:1,
			}).css('opacity',0);
		});
		if(windowWidth<=479){
			$('#photo_big .big img').css('width','300px').css('height','200px');
		}else if (windowWidth>=480 && windowWidth<=767) {
			$('#photo_big .big img').css('width','400px').css('height','300px');
		}else if (windowWidth>=768 && windowWidth<=991) {
			$('#photo_big .big img').css('width','500px').css('height','400px');
		}else if (windowWidth>=992 && windowWidth<=1199) {
			$('#photo_big .big img').css('width','500px').css('height','400px');
		}
		this_img.src=$(this).attr('bigsrc');
//		this_img.src='http://pic2.desk.chinaz.com/file/201212/6/yidaizongshi6.jpg';
	});
	$('#photo_big h2 img').click(function(){
		$('#photo_big').hide();
	});
//	$('#div1 img').bind('click',function(){
//		alert($(this).attr('bigsrc'));
//	});
	
}
