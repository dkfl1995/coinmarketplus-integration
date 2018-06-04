function addLikes(id,action,userid) {
	$('.demo-table #tutorial-'+id+' li').each(function(index) {
		$(this).addClass('selected');
		$('#tutorial-'+id+' #rating').val((index+1));
		if(index == $('.demo-table #tutorial-'+id+' li').index(obj)) {
			return false;	
		}
	});
	$.ajax({
	url: "https://www.coinmarketplus.com/wp-content/themes/twentysixteen-child/template-parts/cmpvoting/ajax_votes.php",
	data:'id='+id+'&action='+action+'&userid='+userid, 
	type: "POST",
	beforeSend: function(){
		$('#tutorial-'+id+' .btn-likes').html("<img src='https://www.coinmarketplus.com/wp-content/themes/twentysixteen-child/images/loaderIcon.gif' />");
	},
	success: function(data){
	var likes = parseInt($('#likes-'+id).val());
	switch(action) {
		case "like":
		$('#tutorial-'+id+' .btn-likes').html('<input type="button" title="Unlike" class="unlike" onClick="addLikes('+id+',\'unlike\','+userid+')" />');
		likes = likes+1;
		break;
		case "unlike":
		$('#tutorial-'+id+' .btn-likes').html('<input type="button" title="Like" class="like"  onClick="addLikes('+id+',\'like\','+userid+')" />')
		likes = likes-1;
		break;
	}
	$('#likes-'+id).val(likes);
	if(likes>0) {
		$('#tutorial-'+id+' .label-likes').html(likes+" Vote(s)");
	} else {
		$('#tutorial-'+id+' .label-likes').html(likes+" Vote");
	}
	}
	});
}

