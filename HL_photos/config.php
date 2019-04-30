<?php
session_start();   //保存信息必须放在最头部
header("Content-Type:text/html;charset=gb2312"); //注意下在utf-8时，str_split($str,3);一个中文字母是占3个字母
//这是生成一个图片
$image=imagecreatetruecolor(100,30);  //这个生成的是全部黑色的
$bgcolor=imagecolorallocate($image,255,255,255); //imagecolorallocate是一个点的，3个255是白色的意思
imagefill($image,0,0,$bgcolor);   //这个是，从xy轴铺满颜色
//这是生成图片的格式
header("Content-Type:image/png");//必须写这个输出图片的格式，否则是不会成功的，切记
/*
//这个是生成随机的数字
for($i=0;$i< 4;$i++){
$fontsize=6;	
$fontcolor=imagecolorallocate($image,rand(0,120),rand(0,120),rand(0,120));
$fontcontent=rand(0,9);
$x=($i*100/4)+rand(5,10);
$y=rand(5,10);	
imagestring($image,$fontsize,$x,$y,$fontcontent,$fontcolor);//这个是画一个水平的字符，并且第一个是字体大小，二三是，xy轴，四是内容，五是颜色，不能乱换位置，否则将会出错误
}*/
//这个是随机产生字母和数字
$captch_code='';
for($i=0;$i< 4;$i++){
	$fontsize=6;
	$fontcolor=imagecolorallocate($image,rand(0,120),rand(0,120),rand(0,120));
	$date='abcdefghjkmnpqrstyvwxy123456789';      //这个是用来装多个的值
	$fontcontent=substr($date,rand(0,strlen($date)),1);
	$captch_code.=$fontcontent;  //这里是在.= 是运用到了拼接
	$x=($i*100/4)+rand(5,10);
	$y=rand(5,10);
	imagestring($image,$fontsize,$x,$y,$fontcontent,$fontcolor);  //注意：当出现多个内容是,一般都是，写成了.
	}
$_SESSION['authcode']=$captch_code;    //这个是保存信息	
	
//这个是生成随机的干扰点
for($i=0;$i< 200;$i++){
$pointcolor=imagecolorallocate($image,rand(50,200),rand(50,200),rand(50,200));//这个是产生点的颜色
imagesetpixel($image,rand(1,99),rand(1,29),$pointcolor);	//imagesetpixel是画一个单一的像素，二三代表的这张图片的长度，和宽度，四是代表颜色
}
//这个是生成随机的干扰线
for($i=0;$i< 3;$i++){
$linecolor=imagecolorallocate($image,rand(80,220),rand(80,220),rand(80,220));	
imageline($image,rand(1,99),rand(1,29),rand(1,99),rand(1,29),$linecolor);	//这里是线是有两个点连成，二三是x1y1，四五是x2y2，的连个点的坐标，六还是颜色
	}
//这是显示图片
imagepng($image);
//这是摧毁图片，释放空间
imagedestroy($image);

?>