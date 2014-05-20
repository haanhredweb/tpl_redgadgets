jQuery(document).ready(function() {

	function stickyFooter()
	{
		var h = jQuery(window).height() - jQuery('.wrapper-footer').height();

		if (h > jQuery('.wrapper-main > .container').height())
		{
			jQuery('.wrapper-main > .container').height(h - 1);
		}
		else
		{
			jQuery('.wrapper-main > .container').css('height', '');
		}
	}

	stickyFooter();
	
	jQuery(window).resize(function() {
		stickyFooter();

	});
});
