<?php
session_start();   //������Ϣ���������ͷ��
header("Content-Type:text/html;charset=gb2312"); //ע������utf-8ʱ��str_split($str,3);һ��������ĸ��ռ3����ĸ
//��������һ��ͼƬ
$image=imagecreatetruecolor(100,30);  //������ɵ���ȫ����ɫ��
$bgcolor=imagecolorallocate($image,255,255,255); //imagecolorallocate��һ����ģ�3��255�ǰ�ɫ����˼
imagefill($image,0,0,$bgcolor);   //����ǣ���xy��������ɫ
//��������ͼƬ�ĸ�ʽ
header("Content-Type:image/png");//����д������ͼƬ�ĸ�ʽ�������ǲ���ɹ��ģ��м�
/*
//������������������
for($i=0;$i< 4;$i++){
$fontsize=6;	
$fontcolor=imagecolorallocate($image,rand(0,120),rand(0,120),rand(0,120));
$fontcontent=rand(0,9);
$x=($i*100/4)+rand(5,10);
$y=rand(5,10);	
imagestring($image,$fontsize,$x,$y,$fontcontent,$fontcolor);//����ǻ�һ��ˮƽ���ַ������ҵ�һ���������С�������ǣ�xy�ᣬ�������ݣ�������ɫ�������һ�λ�ã����򽫻������
}*/
//��������������ĸ������
$captch_code='';
for($i=0;$i< 4;$i++){
	$fontsize=6;
	$fontcolor=imagecolorallocate($image,rand(0,120),rand(0,120),rand(0,120));
	$date='abcdefghjkmnpqrstyvwxy123456789';      //���������װ�����ֵ
	$fontcontent=substr($date,rand(0,strlen($date)),1);
	$captch_code.=$fontcontent;  //��������.= �����õ���ƴ��
	$x=($i*100/4)+rand(5,10);
	$y=rand(5,10);
	imagestring($image,$fontsize,$x,$y,$fontcontent,$fontcolor);  //ע�⣺�����ֶ��������,һ�㶼�ǣ�д����.
	}
$_SESSION['authcode']=$captch_code;    //����Ǳ�����Ϣ	
	
//�������������ĸ��ŵ�
for($i=0;$i< 200;$i++){
$pointcolor=imagecolorallocate($image,rand(50,200),rand(50,200),rand(50,200));//����ǲ��������ɫ
imagesetpixel($image,rand(1,99),rand(1,29),$pointcolor);	//imagesetpixel�ǻ�һ����һ�����أ��������������ͼƬ�ĳ��ȣ��Ϳ�ȣ����Ǵ�����ɫ
}
//�������������ĸ�����
for($i=0;$i< 3;$i++){
$linecolor=imagecolorallocate($image,rand(80,220),rand(80,220),rand(80,220));	
imageline($image,rand(1,99),rand(1,29),rand(1,99),rand(1,29),$linecolor);	//���������������������ɣ�������x1y1��������x2y2��������������꣬��������ɫ
	}
//������ʾͼƬ
imagepng($image);
//���Ǵݻ�ͼƬ���ͷſռ�
imagedestroy($image);

?>