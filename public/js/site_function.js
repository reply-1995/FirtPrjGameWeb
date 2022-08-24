//MOBILE MENU
jQuery("header .nav .nav-icon").click(function() {
	jQuery(this).toggleClass("active");
	jQuery("header .navbar").toggleClass("active");
	jQuery("html, body").toggleClass("hidden");
	jQuery(".view_head").toggleClass("on");
});
jQuery(document).on("click",".nav .navbar.active>li.menu-item-has-children > a", function() {
	jQuery(this).removeAttr('href');
	var is_display = jQuery(this).next(".sub-menu").css("display");
	if (is_display == "block") {
		jQuery(this).next(".sub-menu").stop().slideUp();
		jQuery(this).parent('li').removeClass('active');
	} else {
		jQuery(".sub-menu").stop().slideUp();
		jQuery(this).next(".sub-menu").stop().slideDown();
		jQuery(".nav .navbar.active>li.menu-item-has-children").removeClass('active');
		jQuery(this).parent('li').addClass('active');
	}
	return false;
});

//Top 버튼
jQuery('.to-top').click(function() {
	jQuery('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});

jQuery("textarea").change(function(){
	var current_val = jQuery(this).val();

	current_val = current_val.replace(/</g, "&lt;").replace(/>/g, "&gt;");
	current_val = current_val.replace(/'/g, "&quot;").replace(/"/g, '&#39;');
	current_val = current_val.replace(/(<([^>]+)>)/ig,"");
	jQuery(this).val(current_val);
});

//게시판 검색
jQuery("#keyword").keydown(function(key) {
	if (key.keyCode == 13) {
		jQuery('#keyword_btn').trigger('click');
	}
});
jQuery("#keyword_btn").click(function(){
	if(document.location.hash && document.location.hash != "#1") {
		document.location.hash = "#1";
	}
	jQuery(this).parents('form').submit();
});

//xss 방지
jQuery('input[type=text],input[type=tel], textarea').on("propertychange change keyup paste input", function() {
	var current_value = jQuery(this).val();
	current_value = current_value.replace(/</gi, '');
	current_value = current_value.replace(/>/gi, '');
	current_value = current_value.replace('\'', '');
	current_value = current_value.replace('"', '');
	jQuery(this).val(current_value);
});


function isMobile() {
	var user = navigator.userAgent;
	var is_mobile = false;

	if( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
		is_mobile = true;
	}
	return is_mobile;
}
