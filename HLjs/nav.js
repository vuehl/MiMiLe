$(function(){
//网站导航开始
$('#HL_nav .HL_website').hover(function (){
	$('#HL_website').slideDown().css('display','block');
	
	},function (){
	$('#HL_website').stop().slideUp(500);
		});
		
//客户服务开始
$('#HL_nav .HL_custom').hover(function (){
	$('#HL_custom').slideDown().css('display','block');
	},function (){
	$('#HL_custom').stop().slideUp(500);
		});	
		
//当滚动条大于屏幕时,搜索框出现
var tur=true;
function HL_search() { 
 var t = document.documentElement.scrollTop || document.body.scrollTop;
 if (t > 500) { 
  $('.HL_search_hidden').slideDown(1000);
 } else { 
   $('.HL_search_hidden').slideUp(1000);
 } 
 tur=true;
}			
//轮播图左边的图片

$('.HL_banner_img').hover(function (){
	$('.HL_banner_bg').stop().animate({left:'80px'},1000,'swing');
	},function (){
	$('.HL_banner_bg').stop().animate({left:'-1000px'},1000,'swing');		
	});
	
//轮播图左边位置的文字浮动div
$('.HL_banner_text ul .HL_banner_text_li_1').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_1').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_1').css('display','none');	
	});	
$('.HL_banner_text ul .HL_banner_text_li_2').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_2').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_2').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_3').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_3').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_3').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_4').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_4').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_4').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_5').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_5').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_5').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_6').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_6').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_6').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_7').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_7').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_7').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_8').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_8').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_8').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_9').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_9').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_9').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_10').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_10').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_10').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_11').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_11').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_11').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_12').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_12').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_12').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_13').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_13').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_13').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_14').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_14').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_14').css('display','none');	
	});			
$('.HL_banner_text ul .HL_banner_text_li_15').hover(function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_15').css('display','block');
	},function (){
	$('.HL_banner_text ul li .HL_banner_ul_li_15').css('display','none');	
	});			
														
//轮播图开始
$('.HL_banner_whole_top ul li img').css('display','none');
$('.HL_banner_whole_top ul li img').eq(0).css('display','block');
$('.HL_banner_whole_num li').eq(0).css('background','#333');
//自动轮播
var banner_index=0;
var banner_timer=setInterval(banner_fn,3000);

//手动轮播图
$('.HL_banner_whole_top ul li').hover(function (){
	clearInterval(banner_timer);
	banner(this);
	},function (){
	banner_index=$(this).index()+1;//获取索引值，使他在下一个图片，开始播放
	banner_timer=setInterval(banner_fn,3000);	  //这个把动画赋值给他，但还是可以运动的
		});
	
function banner(obj){
	$('.HL_banner_whole_top ul li img').stop().fadeOut(300);
	$('.HL_banner_whole_top ul li img').eq($(obj).index()).stop().fadeIn(300);
	$('.HL_banner_whole_num li').css('background','#ccc');
	$('.HL_banner_whole_num li').eq($(obj).index()).css('background','#333');
	}
function banner_fn(){
	if(banner_index>=6){banner_index=0};
	banner($('.HL_banner_whole_num li').eq(banner_index));
  banner_index++;
	}	


//倒计时开始
function getRTime(){ 
var EndTime= new Date('2017/3/12 12:00:00'); //截止时间,格式为年月日 时分秒 
var NowTime = new Date(); 
var t =EndTime.getTime() - NowTime.getTime(); //getTime()是获取格林事件  也就是当前的时间

 
var d=Math.floor(t/1000/60/60/24); 
var h=Math.floor(t/1000/60/60%24); 
var m=Math.floor(t/1000/60%60); 
var s=Math.floor(t/1000%60); 


document.getElementById("t_s").innerHTML = s + "秒"; 
document.getElementById("t_m").innerHTML = m + "分";
document.getElementById("t_h").innerHTML = h + "时";  
document.getElementById("t_d").innerHTML = d + "天"; 


} 
setInterval(getRTime,1000); 
//倒计时完成，图片内容开始,注意当用到索引index()函数时,必须是li才能使正常显示

/*這个是米米乐下面的图片,用延迟加载*/
//alert($('#HL_recommend').scrollTop());
//alert($(window).height());
//alert($(document).height());
//alert($('#HL_recommend').offset().top);
/*秒杀倒计时线面的图片延迟*/
/*
window.onscroll = function (){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<12;i++){   
			if(scroll + $(window).height() > $('#HL_recommend').offset().top){
		 	$('.HL_recommend_img').eq(i).attr('src',$('.HL_recommend_img').eq(i).attr('xsrc')).animate({
		 		 //切记,這里为了能实现延迟加载,所以src必须放入等待的图片,xsrc则放入加载好的图片
		 		opacity:"1"
		 		},1500); 
		}
		}

	};
*/	
/*享品质的图片延迟加载*/
/*
	window.onscroll=function (){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<9;i++){
			if(scroll + $(window).height() > $('#HL_enjoy').offset().top){
				$('#HL_enjoy img').eq(i).attr('src',$('#HL_enjoy img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				}
			}
		}


*/

/*這个是倒计时下面的图片延迟加载*/
function HL_recommend(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<12;i++){   
			if(scroll + $(window).height() > $('#HL_recommend').offset().top){
		 	$('.HL_recommend_img').eq(i).attr('src',$('.HL_recommend_img').eq(i).attr('xsrc')).animate({
		 		 //切记,這里为了能实现延迟加载,所以src必须放入等待的图片,xsrc则放入加载好的图片
		 		opacity:"1"
		 		},1500);
		 	$('#HL_recommend dl img').eq(i).hover(function (){
		 		$(this).css("opacity","0.6");
		 		},function (){
		 		$(this).css("opacity","1");	
		 			});	 
		}
		}
		tur=true;
	}
/*這个是享品质的图片加载*/

function HL_enjoy(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<9;i++){
			if(scroll + $(window).height() > $('#HL_enjoy').offset().top){
				$('#HL_enjoy img').eq(i).attr('src',$('#HL_enjoy img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_enjoy img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}


/*這个是爱生活的图片,移上去就让div下滑下来*/
 
  $('#HL_life_div .HL_life_title_left .HL_life_middle ul li').hover(function (){
  	//alert($(this).index());
  	//alert($('#HL_life .HL_life_title_left .HL_life_middle ul li div').length);
	$('#HL_life .HL_life_title_left .HL_life_middle ul li div').eq($(this).index()).stop().slideDown();
	
	},function (){
	$('#HL_life_div .HL_life_title_left .HL_life_middle ul li div').eq($(this).index()).stop().slideUp();	
		});
 /*這是爱生活右边的图片*/
  $('#HL_life_div .HL_life_title_right .HL_right_middle ul li').hover(function (){
  	//alert($(this).index());
  	//alert($('#HL_life .HL_life_title_left .HL_life_middle ul li div').length);
	$('#HL_life_div .HL_life_title_right .HL_right_middle ul li div').eq($(this).index()).stop().slideDown();
	
	},function (){
	$('#HL_life_div .HL_life_title_right .HL_right_middle ul li div').eq($(this).index()).stop().slideUp();	
		});
	function HL_life_left(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<6;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_life_div .HL_life_middle ul li img').eq(i).attr('src',$('#HL_life .HL_life_middle ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_life_div .HL_life_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}
		function HL_life_bottom_left(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<2;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_life .HL_life_bottom_left ul li img').eq(i).attr('src',$('#HL_life .HL_life_bottom_left ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_life .HL_life_bottom_left ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}
	/*這是生活右边的延迟加载*/
	function HL_life_right(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<6;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_life .HL_right_middle ul li img').eq(i).attr('src',$('#HL_life .HL_right_middle ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_life .HL_right_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}
		function HL_life_bottom_right(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<2;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_life .HL_life_bottom_right ul li img').eq(i).attr('src',$('#HL_life .HL_life_bottom_right ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_life .HL_life_bottom_right ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}	
/*這是家用型的部分*/
  $('#HL_home .HL_home_title_left .HL_home_middle ul li').hover(function (){
  	//alert($(this).index());
  	//alert($('#HL_life .HL_life_title_left .HL_life_middle ul li div').length);
	$('#HL_home .HL_home_title_left .HL_home_middle ul li div').eq($(this).index()).stop().slideDown();
	
	},function (){
	$('#HL_home .HL_home_title_left .HL_home_middle ul li div').eq($(this).index()).stop().slideUp();	
		});
 /*這是家用型右边的图片*/
  $('#HL_home .HL_home_title_right .HL_right_middle ul li').hover(function (){
  	//alert($(this).index());
  	//alert($('#HL_life .HL_life_title_left .HL_life_middle ul li div').length);
	$('#HL_home .HL_home_title_right .HL_right_middle ul li div').eq($(this).index()).stop().slideDown();
	
	},function (){
	$('#HL_home .HL_home_title_right .HL_right_middle ul li div').eq($(this).index()).stop().slideUp();	
		});
/*這是家用型左边的延迟加载图片*/
	function HL_home_left(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<6;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_home .HL_home_middle ul li img').eq(i).attr('src',$('#HL_home .HL_home_middle ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_home .HL_home_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}
	function HL_home_bottom_left(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<2;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_home .HL_home_bottom_left ul li img').eq(i).attr('src',$('#HL_home .HL_home_bottom_left ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_home .HL_home_bottom_left ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}	
/*這是家用型右边的图片*/
function HL_home_right(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<6;i++){
			if(scroll + $(window).height() > $('#HL_home').offset().top){
				$('#HL_home .HL_right_middle ul li img').eq(i).attr('src',$('#HL_home .HL_right_middle ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_home .HL_right_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}

	function HL_home_bottom_right(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		for(var i=0;i<2;i++){
			if(scroll + $(window).height() > $('#HL_life').offset().top){
				$('#HL_home .HL_home_bottom_right ul li img').eq(i).attr('src',$('#HL_home .HL_home_bottom_right ul li img').eq(i).attr('xsrc')).animate({
					opacity:"1"
					},1500);
				/*PS:切记,原本在css哪里加了hover属性可以用,但是在onscroll這里不可以用,用jq在写一次就可以解决了*/	
				$('#HL_home .HL_home_bottom_right ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
					}
			}
			tur=true;
	}	
/*這是电脑数码的延迟加载*/	
function HL_computer(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<18;i++){
	if(scroll + $(window).height() > $('#HL_computer').offset().top){
		$('#HL_computer .HL_computer_middle ul li img').eq(i).attr('src',$('#HL_computer .HL_computer_middle ul li img').eq(i).attr('xsrc')).animate({
			opacity:"1"
			},1500);
				$('#HL_computer .HL_computer_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
		}	
		}
	tur=true;
	}
/*這是爱吃的延迟加载*/
function HL_eat(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<18;i++){
	if(scroll + $(window).height() > $('#HL_eat').offset().top){
		$('#HL_eat .HL_eat_middle ul li img').eq(i).attr('src',$('#HL_eat .HL_eat_middle ul li img').eq(i).attr('xsrc')).animate({
			opacity:"1"
			},1500);
				$('#HL_eat .HL_eat_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
		}	
		}
	tur=true;
	}
/*爱宝宝的专区延迟加载*/
function HL_baby(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<36;i++){
	if(scroll + $(window).height() > $('#HL_baby').offset().top){
		$('#HL_baby .HL_baby_middle ul li img').eq(i).attr('src',$('#HL_baby .HL_baby_middle ul li img').eq(i).attr('xsrc')).animate({
			opacity:"1"
			},1500);
				$('#HL_baby .HL_baby_middle ul li img').eq(i).hover(function (){
					$(this).css("opacity","0.6");
					},function (){
					$(this).css("opacity","1");	
						});	
		}	
		}
	tur=true;
	}
/*还没逛够的部分延迟加载*/
function HL_goshop(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	for(var i=0;i<50;i++){
	if(scroll + $(window).height() > $('#HL_goshop').offset().top){
		$('#HL_goshop .HL_goshop_middle ul li dl dt img').eq(i).attr('src',$('#HL_goshop .HL_goshop_middle ul li dl dt img').eq(i).attr('xsrc')).animate({
			opacity:"1"
			},1500);
			//PS:切记,当涉及到eq(i)时,就会用到$(this)然后通过寻找,就会找到了,进行实现,否则会找不到
				$('#HL_goshop .HL_goshop_middle ul li').eq(i).hover(function (){
				  $(this).find('dl').find('dd').find('span').css('color','red');
				  //$('#HL_goshop .HL_goshop_middle ul li dl dt span').css('color','red');	
					$(this).css('border','1px solid red');
					},function (){
					//$('#HL_goshop .HL_goshop_middle ul li dl dt span').css('color','#666');	
					$(this).find('dl').find('dd').find('span').css('color','#666');
					$(this).css('border','1px solid #fff');
						});	
		}	
		}
	tur=true;
	}	

/*导航左边的开始*/
function HL_left_nav(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	   for(i=0;i<8;i++){
	   	$('#HL_left_nav ul li').eq(i).click(function (){
	   		for(j=0;j<8;j++){
	   		$('#HL_left_nav ul li').css('background','#999');	
	   			}
	   	  $(this).css('background','red');
	   	  //alert($(this).index());
	   	 	if(0==$(this).index()){	
	   	 	$(document).scrollTop(1200);
	   	 	}
	   	 	if(1==$(this).index()){
	   	 $(document).scrollTop(1755);		
	   	 		}
	   	 	if(2==$(this).index()){
	   	 	$(document).scrollTop(2355);		
	   	 		}	
	   	 	if(3==$(this).index()){
	   	 	$(document).scrollTop(2955);	
	   	 		}	
	   	 	if(4==$(this).index()){
	   	 	$(document).scrollTop(3589);	
	   	 		}	
	   	 	if(5==$(this).index()){
	   	 	$(document).scrollTop(4215);
	   	 		}	
	   	  if(6==$(this).index()){
	   	 	$(document).scrollTop(5345);	
	   	 		}	
	   	 	if(7==$(this).index()){
	   	 	$(document).scrollTop(0);	
	   	 		}					
	   		});
	   	if(scroll > $('#HL_enjoy').offset().top && scroll< $('#HL_life').offset().top-($(window).height())/2){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(0).css('background','red');		
	   	}
	   	
     if(scroll > $('#HL_life').offset().top-($(window).height())/2 && scroll< $('#HL_home').offset().top-($(window).height())/2){
	 		$('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(1).css('background','red');		
	   	}
	 		
	 	 if(scroll > $('#HL_home').offset().top-($(window).height())/2 && scroll< $('#HL_computer').offset().top-($(window).height())/2){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    $('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(2).css('background','red');		
	   	} 
	  
	  if(scroll > $('#HL_computer').offset().top-($(window).height())/2 && scroll< $('#HL_eat').offset().top-($(window).height())/2){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(3).css('background','red');		
	   	} 
	
	   if(scroll > $('#HL_eat').offset().top-($(window).height())/2 && scroll< $('#HL_baby').offset().top-($(window).height())/2){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(4).css('background','red');		
	   	} 
	
	   if(scroll > $('#HL_baby').offset().top-($(window).height())/2 && scroll< $('#HL_goshop').offset().top-($(window).height())/2){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(5).css('background','red');		
	   	} 
	
	   if(scroll > $('#HL_goshop').offset().top-($(window).height())/2 && scroll< $('#HL_copyright').offset().top-($(window).height())/2){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(6).css('background','red');		
	   	} 
	
	
	   if(scroll > $('#HL_copyright').offset().top-($(window).height())){
	 	  $('#HL_left_nav').css('display','block').animate({opacity:"1"},40);	
	    $('#HL_left_nav ul li').each(function (i){
	    	$('#HL_left_nav ul li').css('background','#999');	
	    	})
	    $('#HL_left_nav ul li').eq(7).css('background','red');		
	   	} 
	   if(scroll < $('#HL_enjoy').offset().top){
	   	$('#HL_left_nav').animate({opacity:"0"},40);	
	   	}
	
	 }
	  }
/*窗口改变事件,目的是让左边的导航条在窗口改变时,进行剧中*/		  
function HL_center(){
	var obj=$('#HL_left_nav').height();
	var top=($(window).height()-obj)/2;
	$('#HL_left_nav').css('top',top); 
	}	  
	  
window.onresize = function (){
	setTimeout(HL_center,10);
	}

/*這里要用函数才可以执行多个滚动事件,或则会多用多个window.onscroll事件会冲突*/

window.onscroll=function (){
	if(tur){
		setTimeout(HL_enjoy,1000);
		setTimeout(HL_recommend,1000);
		setTimeout(HL_search,1000);
		setTimeout(HL_life_left,1000);
		setTimeout(HL_life_right,1000);
		setTimeout(HL_home_left,1000);
		setTimeout(HL_home_right,1000);
		setTimeout(HL_life_bottom_left,1000);
		setTimeout(HL_life_bottom_right,1000);
		setTimeout(HL_home_bottom_left,1000);
		setTimeout(HL_home_bottom_right,1000);
		setTimeout(HL_computer,1000);
		setTimeout(HL_eat,1000);
		setTimeout(HL_baby,1000);
		setTimeout(HL_goshop,1000);
		setTimeout(HL_left_nav,1000);
		setTimeout(HL_center,10);
		tur=false;
		}
	}



})