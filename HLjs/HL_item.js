$(function (){
	//�û�����ʼ
	$('#HL_item .HL_item_user input').click(function (){
			  $('#HL_item .HL_item_user_error').css('display','none');	
	  		$('#HL_item .HL_item_user_error2').css('display','none');	
	  		$('#HL_item .HL_item_user_correct').css('display','none');
	  		$('#HL_item .HL_item_user_info').css('display','block');	
		}).blur(function (){
			if($('#HL_item .HL_item_user input').val()==''){
	  		$('#HL_item .HL_item_user_error').css('display','none');	
	  		$('#HL_item .HL_item_user_error2').css('display','none');	
	  		$('#HL_item .HL_item_user_correct').css('display','none');
	  		$('#HL_item .HL_item_user_info').css('display','block');		
	  				}else if(check_user()){
	  		$('#HL_item .HL_item_user_error').css('display','none');	
	  		$('#HL_item .HL_item_user_error2').css('display','none');	
	  		$('#HL_item .HL_item_user_correct').css('display','block');
	  		$('#HL_item .HL_item_user_info').css('display','none');	
	  		}else if(/^([a-z]|[A-Z]|[0-9]){0,3}$/.test($('#HL_item .HL_item_user input').val())){
	  			$('#HL_item .HL_item_user_error').css('display','block');	
	  		$('#HL_item .HL_item_user_error2').css('display','none');	
	  		$('#HL_item .HL_item_user_correct').css('display','none');
	  		$('#HL_item .HL_item_user_info').css('display','none');	
	  			}else {
	  		$('#HL_item .HL_item_user_error').css('display','none');	
	  		$('#HL_item .HL_item_user_error2').css('display','block');	
	  		$('#HL_item .HL_item_user_correct').css('display','none');
	  		$('#HL_item .HL_item_user_info').css('display','none');			
	  					}
	  	});
function check_user(){
	   if(/^[a-z0-9_-]{4,12}$/.test($('#HL_item .HL_item_user input').val())) return true;
	   }
//���뿪ʼ
//PS:��ס ���ж������ǿ��ʱ�������code_length������Ϊ�ֲ�������code_length�Ż���ӣ�һ��Ҫ��ס
//code_length  ������� ���ж������ǿ���� �Ǹ��ȼ�
function check_pwd(){

var code_length=0;
if(/[0-9]/.test($('#HL_item .HL_item_pwd input').val())){
	code_length++;
	}
	 if(/[a-z]/.test($('#HL_item .HL_item_pwd input').val())){
	code_length++;
	}
	 if(/[A-Z]/.test($('#HL_item .HL_item_pwd input').val())){
	code_length++;
	}	
	 if(!/0-9a-zA-z_-/.test($('#HL_item .HL_item_pwd input').val())){
	code_length++;
	}
	
//�ж�����ǿ�ȿ�ʼ
//����������ж�ǿ��	
	 if(code_length ==2 && $('#HL_item .HL_item_pwd input').val().length >5){
	$('#HL_item .HL_item_pwd_error').css('display','none');	
	  		$('#HL_item .HL_item_pwd_judge1').css('display','block');
	  		$('#HL_item .HL_item_pwd_judge2').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge3').css('display','none');	
	  		$('#HL_item .HL_item_pwd_correct').css('display','none');
	  		$('#HL_item .HL_item_pwd_info').css('display','none');
	}else if(code_length == 3 && $('#HL_item .HL_item_pwd input').val().length >5){
		    $('#HL_item .HL_item_pwd_error').css('display','none');	
	  		$('#HL_item .HL_item_pwd_judge1').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge2').css('display','block');
	  		$('#HL_item .HL_item_pwd_judge3').css('display','none');	
	  		$('#HL_item .HL_item_pwd_correct').css('display','none');
	  		$('#HL_item .HL_item_pwd_info').css('display','none');
		} else if(code_length >=4 && $('#HL_item .HL_item_pwd input').val().length >5){
			  $('#HL_item .HL_item_pwd_error').css('display','none');	
	  		$('#HL_item .HL_item_pwd_judge1').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge2').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge3').css('display','block');	
	  		$('#HL_item .HL_item_pwd_correct').css('display','none');
	  		$('#HL_item .HL_item_pwd_info').css('display','none');
			  }	 
			if($('#HL_item .HL_item_pwd input').val().length >5 && $('#HL_item .HL_item_pwd input').val().length < 15 && !/\s/.test($('#HL_item .HL_item_pwd input').val())){
			 return true;	
				}else {
				return false;	
					}
		}		 
$('#HL_item .HL_item_pwd input').click(function (){
	     	$('#HL_item .HL_item_pwd_error').css('display','none');	
	  		$('#HL_item .HL_item_pwd_judge1').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge2').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge3').css('display','none');	
	  		$('#HL_item .HL_item_pwd_correct').css('display','none');
	  		$('#HL_item .HL_item_pwd_info').css('display','block');
	}).blur(function (){
		if($('#HL_item .HL_item_pwd input').val().length > 5 && $('#HL_item .HL_item_pwd input').val().length < 15){
	      check_pwd();          //������ڳɹ��������£��ڽ����������
	  		}else if($('#HL_item .HL_item_pwd input').val()==''){
	  		$('#HL_item .HL_item_pwd_error').css('display','none');	
	  		$('#HL_item .HL_item_pwd_judge1').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge2').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge3').css('display','none');	
	  		$('#HL_item .HL_item_pwd_correct').css('display','none');
	  		$('#HL_item .HL_item_pwd_info').css('display','block');	
	  			} else{
				$('#HL_item .HL_item_pwd_error').css('display','block');	
	  		$('#HL_item .HL_item_pwd_judge1').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge2').css('display','none');
	  		$('#HL_item .HL_item_pwd_judge3').css('display','none');	
	  		$('#HL_item .HL_item_pwd_correct').css('display','none');
	  		$('#HL_item .HL_item_pwd_info').css('display','none');
				}
		})
	
//ȷ������
	$('#HL_item .HL_item_pwds input').click(function (){
			  $('#HL_item .HL_item_pwds_error').css('display','none');	
	  		$('#HL_item .HL_item_pwds_correct').css('display','none');
	  		$('#HL_item .HL_item_pwds_info').css('display','block');	
		}).blur(function (){
			if($('#HL_item .HL_item_pwds input').val()==''){
				$('#HL_item .HL_item_pwds_error').css('display','none');	
	  		$('#HL_item .HL_item_pwds_correct').css('display','none');
	  		$('#HL_item .HL_item_pwds_info').css('display','block');
				
				}else if($('#HL_item .HL_item_pwds input').val() == $('#HL_item .HL_item_pwd input').val() && $('#HL_item .HL_item_pwds input').val()!=''){
				$('#HL_item .HL_item_pwds_error').css('display','none');	
	  		$('#HL_item .HL_item_pwds_correct').css('display','block');
	  		$('#HL_item .HL_item_pwds_info').css('display','none');
				} else {
				$('#HL_item .HL_item_pwds_error').css('display','block');	
	  		$('#HL_item .HL_item_pwds_correct').css('display','none');
	  		$('#HL_item .HL_item_pwds_info').css('display','none');	
					}
			})
//�ֻ����뿪ʼ	
	$('#HL_item .HL_item_photo input').click(function (){
			  $('#HL_item .HL_item_photo_error').css('display','none');	
	  		$('#HL_item .HL_item_photo_correct').css('display','none');
	  		$('#HL_item .HL_item_photo_info').css('display','block');	
		}).blur(function (){
				if($('#HL_item .HL_item_photo input').val()==''){
				$('#HL_item .HL_item_photo_error').css('display','none');	
	  		$('#HL_item .HL_item_photo_correct').css('display','none');
	  		$('#HL_item .HL_item_photo_info').css('display','block');
				
				}else if(check_photo()){
				$('#HL_item .HL_item_photo_error').css('display','none');	
	  		$('#HL_item .HL_item_photo_correct').css('display','block');
	  		$('#HL_item .HL_item_photo_info').css('display','none');
				} else {
				$('#HL_item .HL_item_photo_error').css('display','block');	
	  		$('#HL_item .HL_item_photo_correct').css('display','none');
	  		$('#HL_item .HL_item_photo_info').css('display','none');	
					}
		})	
function check_photo(){
	if(/^[0-9]{11}$/.test($('#HL_item .HL_item_photo input').val()))  return true;
}		
//��֤�� ��ʼ	
$('')
//button��ť�ж��Ƿ�����ύ
$('#HL_item .HL_item_button').click(function (){
	var flag=true;
	if(!check_user()){
		$('#HL_item .HL_item_user_error').css('display','block');
		$('#HL_item .HL_item_user_info').css('display','none');
		flag=false;
		}
	if(!check_pwd()){
		$('#HL_item .HL_item_pwd_error').css('display','block');
		$('#HL_item .HL_item_pwd_info').css('display','none');
		flag=false;
		}
	if(!check_photo()){
		$('#HL_item .HL_item_photo_error').css('display','block');
		$('#HL_item .HL_item_photo_info').css('display','none');
		flag=false;
		}	
	if($('#HL_item .HL_item_code input').val().length == 4){
    $('#HL_item .HL_item_code_correct').css('display','block');
    flag=true;
		}else {
		 $('#HL_item .HL_item_code_error').css('display','block');
    flag=false;	
			}
	if(flag){
		$('#HL_item .form').submit();
		}	
	})
	
	
	
	
	
	
	
	})