jQuery(document).ready(function($){
	$('#product_currency').change(function(){
		$(this).next().click();
	});

	$('#product_currency').select2({
		width: 'off',
		dropdownAutoWidth: true
	});

	$('#main-content select').select2({
		width: 'element',
		dropdownCssClass: 'main'
	});

	var tabs = '<ul class="nav nav-tabs">';
	$('#grid-tab').find('.moduletable').each(function(i, e){
		$(this).attr('id', 'tab' + i);
		$(this).addClass('tab-pane fade');
		$(this).parent().addClass('tab-content');
		$(this).find('h3').hide();

		var cl = '';
		if(i == 0)
		{
			$(this).addClass('in active');
			cl = 'active';
		}

		tabs += '<li class="' + cl + '"><a href="#tab' + i + '" data-toggle="tab">' + $(this).find('h3').html() + '</a></li>';
	});

	tabs += '</ul>';
	$('#grid-tab').prepend(tabs);

	$('#top_primary').find('div').find('h3').click(function(){
		$(this).next().slideToggle();
	});

	$('#top_primary').find('div').each(function(){
		$(this).find('h3').next().hide();
	});

	$('#top_primary .moduletable .mod_cart_top').click(function(){

		if ($(this).next().is(':hidden'))
		{
			$(this).addClass('active');
		}

		$(this).next().slideToggle(function(){
			if ($(this).is(':hidden'))
			{
				$(this).prev().removeClass('active');
			}
		});
	});

	$('#login-form li').click(function(){
		$(this).find('.logout-button').slideToggle();
	});

	$('div[id*="comp_"]').click(function(){
		$(this).find('input').eq(0).click();

		$('.compare_product_div').show();
		var position = $(this).offset();
		console.log(position);
		var height = $('.compare_product_div').height();
		var total = $('#totalCompareProduct').html();
		$('.compare_product_div').css('left', position.left);

		if($(this).find('input').is(':checked'))
		{
			$('.compare_product_div').css('top', position.top - height/2 - 110);
		}
		else
		{
			$('.compare_product_div').css('top', position.top - height/2 - 70);
		}
	});

	$('.compare_product_close').click(function(){
		$('.compare_product_div').hide();
	});

	// Remove text stat
	$('.product_rating_summary').contents().filter(function(){
		return this.nodeType === 3;
	}).remove();

	// Compare
	$('#tablecollapse tr').each(function(){

		var th = $(this).find('th');
		var data = $(this).html();

		var tr = $('<tr class="tablecollapse_trdata">'+$(this).html()+'</tr>').insertAfter(this);
		tr.find('th').remove();

		var l = tr.find('td').size();

		if(th.html().trim() != "" && th.html().trim() != "&nbsp;")
		{
			$('<tr class="tablecollapse_trtitle"><td colspan="'+l+'">'+th.html()+'</td></tr>').insertAfter(this);
		}
		$(this).addClass("tablecollapse_trdk");

	});

	// Replace update image
	$(".tdupdatecart").find("img").each(function(){
		var src = $(this).attr("src");
		var a = src.replace("/components/com_redshop/assets/images/update.jpg", "/templates/redbakery/images/com_redshop/update.png");
		$(this).attr("src", a);
	});

	// Replace delete image
	$(".tdremove_product, .remove_compare").find("img").each(function(){
		var src = $(this).attr("src");
		var a = src.replace("/components/com_redshop/assets/images/delete.png", "/templates/redbakery/images/com_redshop/close.png");
		$(this).attr("src", a);
	});

	var m = false;
	m = setResize(m);
	$(window).resize(function(){
		m = setResize(m);
	});

	function setResize(m)
	{
		if($(window).width() < 768)
		{
			if(m == false)
			{
				$('nav#menu').find('li.parent').each(function(){
					var a = $(this).find('a').eq(0);
					var ul = $(this).find('ul.dropdown-menu').eq(0);

					if($(this).hasClass('active'))
					{
						ul.show();
					}
					else
					{
						ul.hide();
					}

					var arrow = $('<span class="chevron chevron-down"></span>').click(function(){
						ul.slideToggle(function(){
							if($(this).is(':hidden'))
							{
								$(arrow).addClass('chevron-down');
								$(arrow).removeClass('chevron-up');
							}
							else
							{
								$(arrow).removeClass('chevron-down');
								$(arrow).addClass('chevron-up');
							}
						});
					});

					a.after(arrow);
				});

				m = true;
			}

			$(".table_billing").find(".col-md-6").css('height', '');
			$("#grid-bottom > .row").find("> div").css('height', '');
		}
		else
		{
			$('nav#menu').find('li.parent').each(function(){
				$(this).find('span.chevron').remove();
				$(this).find('ul.dropdown-menu').css('display', '');
			});

			checkoutpageh = 0;
			$(".table_billing .row.billing").find(".col-md-6").each(function(){
				if(checkoutpageh < $(this).height())
				{
					checkoutpageh = $(this).height();
				}
			});

			$(".table_billing .row.billing").find(".col-md-6").height(checkoutpageh);

			checkoutpageh = 0;
			$(".table_billing .row.method").find(".col-md-6").each(function(){
				if(checkoutpageh < $(this).height())
				{
					checkoutpageh = $(this).height();
				}
			});

			$(".table_billing .row.method").find(".col-md-6").height(checkoutpageh);

			m = false;

			// Grip bottom
			var gridBottomHeight = 0;
			$("#grid-bottom > .row").find("> div").each(function(){
				if ($(this).height() > gridBottomHeight)
				{
					gridBottomHeight = $(this).height();
				}
			});

			$("#grid-bottom > .row").find("> div").height(gridBottomHeight);
		}

		return m;
	}

	$('.dropdown-menu').hover(function(){
		if(!$(this).hasClass('sub-menu'))
		{
			if(!$(this).parent().eq(0).hasClass('active'))
			{
				$(this).parent().eq(0).addClass('active rm');
			}
		}
	}, function(){
		if($(this).parent().hasClass('rm'))
		{
			$(this).parent().eq(0).removeClass('active rm');
		}
	});

	// Fox Google Chrome fonts
	setTimeout(function() {
		$('body').width($('body').width()+1).width('auto');
	}, 500);

});




