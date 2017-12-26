$(document).ready(function(){

	var $heart = $('.heart')
	var	$addComment = $('.photo_addcomment_area');

	$heart.click(function(){
		var likes  = $(this).parent().parent().children('.likes_count').children('.likes_number'),
		likesNumber = parseInt(likes.html()),
		newValue;
	
		if($(this).hasClass('fa-heart-o')){
			newValue = likesNumber + 1;
		} else{
			newValue = likesNumber - 1;
		}

		likes.html(newValue);


		$(this).toggleClass("fa-heart-o fa-heart");
	});

	 $addComment.keydown(function(event){
	 	if(event.keyCode == 13){
	 		var newComment = event.target.value;
	 		var commentList = $(this).parent().parent().children('.comment_container');
	 		$(this).val('').blur();
	 		commentList.append("<li class='comment_content'><span class='comment_author'> Metamong </span>" + newComment + "</li>");
		}
	 	
	 });



});