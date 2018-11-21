/*JQUERY COMMON CODES*/
/* !stack ------------------------------------------------------------------- */
	jQuery(document).ready(function($)
	{
		$(window).on('resize.dpi', function ()
		{
			var BASE_PARAM = $('meta[name="viewport"]').attr('content');
			if (navigator.userAgent.indexOf('Android') != -1 && navigator.userAgent.indexOf('Mobile') != -1 && window.orientation === 0)
			{
				var width = $(window).width();
				var DEFAULT_DPI = 160;
				var DEFAULT_WIDTH = 320;
				if (width !== DEFAULT_WIDTH)
				{
					var dpi = DEFAULT_WIDTH / width * DEFAULT_DPI;
					if (dpi >= 70 && dpi <= 400)
					{
						$('head').append('<meta name="viewport" content="target-densitydpi=' + dpi + ', ' + BASE_PARAM + '" />');
					}
				}
			}
		})
		/*.-------------------------------------------------------------------- */
		.trigger('resize.dpi');
		pageScroll();
		rollover();
		common();
	});
	/*.-------------------------------------------------------------------- */
	$(function()
	{
		if(navigator.userAgent.indexOf("MSIE") != -1)
		{
			$('img').each(function()
			{
				if($(this).attr('src').indexOf('.png') != -1)
				{
					$(this).css(
					{
						'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + $(this).attr('src') + '", sizingMethod="scale");'
					});
				}
			});
		}
	});
	/* !BROWSER SUPPORTS -------------------------------------------------------------------- */
	var isUA = (function()
	{
		var ua = navigator.userAgent.toLowerCase();
		indexOfKey = function(key)
		{
			return (ua.indexOf(key) != -1)? true: false;
		}
		var o = {};
		o.ie      = function(){ return indexOfKey("msie"); }
		o.fx      = function(){ return indexOfKey("firefox"); }
		o.chrome  = function(){ return indexOfKey("chrome"); }
		o.opera   = function(){ return indexOfKey("opera"); }
		o.android = function(){ return indexOfKey("android"); }
		o.ipad    = function(){ return indexOfKey("ipad"); }
		o.ipod    = function(){ return indexOfKey("ipod"); }
		o.iphone  = function(){ return indexOfKey("iphone"); }
		return o;
	})();
	/* !ROLLOVER FUNCTION ---------------------------------------------------------------- */
	var rollover = function()
	{
		var suffix = { normal : '_no.', over   : '_on.'
	}
	$('a.over, img.over, input.over').each(function()
	{
		var a = null;
		var img = null;
		var elem = $(this).get(0);
		if( elem.nodeName.toLowerCase() == 'a' )
		{
			a = $(this);
			img = $('img',this);
		}
		else if( elem.nodeName.toLowerCase() == 'img' || elem.nodeName.toLowerCase() == 'input' )
		{
			img = $(this);
		}
		var src_no = img.attr('src');
		var src_on = src_no.replace(suffix.normal, suffix.over);
		if( elem.nodeName.toLowerCase() == 'a' )
		{
			a.bind("mouseover focus",function(){ img.attr('src',src_on); })
			.bind("mouseout blur",  function(){ img.attr('src',src_no); });
		}
		else if( elem.nodeName.toLowerCase() == 'img' )
		{
			img.bind("mouseover",function(){ img.attr('src',src_on); })
			.bind("mouseout", function(){ img.attr('src',src_no); });
		}
		else if( elem.nodeName.toLowerCase() == 'input' )
		{
			img.bind("mouseover focus",function(){ img.attr('src',src_on); })
			.bind("mouseout blur",  function(){ img.attr('src',src_no); });
		}
		var cacheimg = document.createElement('img');
		cacheimg.src = src_on;
	});
	
};
	/* !PAGESCROLL FUNCTION-------------------------------------------------------------- */
	var pageScroll = function()
	{	
		/* !CLICK TO BUTTON PAGE SCROLL TO TOP -------------------------------------------------------------- */
		
		/*---------------------------------------------*/
		/* !SCROLL TO SHOW HIDE PAGETOP BUTTON TO CLICK SCROLL TO TOP--------------------------------------------------------------*/
		var topBtn = $('.pageTop');
		topBtn.hide();
		$(window).scroll(function()
		{
			if ($(this).scrollTop() > 300 )
			{
				topBtn.fadeIn();
			}
			else
			{
				topBtn.fadeOut();
			}
		});
		
		
		
		
		
		
		/* !SCROLL TO HEADER FIX IN THE TOP --------------------------------------------------- */
		$(document).ready(function() 
		{
			$(window).scroll(function()
			{
				scroll_menu();
			});
			function scroll_menu()
			{
				var scrollTop = parseInt($(document).scrollTop());
				if(scrollTop > 50)
				{
					$('.topHeadfix').slideUp(3000);
				}
				else
				{
					$('.topHeadfix').slideDown(3000);
				}
			}
		});
		/* !SCROLL TO BOTTOM CONTAIN SHOW IN DOWN SIDE --------------------------------------------------- */
		$(document).ready(function() 
		{
			$(window).scroll(function()
			{
				scroll_menu();
			});
			function scroll_menu()
			{
				var scrollTop = parseInt($(document).scrollTop());
				if(scrollTop > 150)
				{
					$('.fadeIn01').fadeIn();
				} 
				if(scrollTop > 300)
				{
					$('.fadeIn02').fadeIn();
				} 
				/* REMOVE ELSE TO CONTAIN SHOW---------------------*/
				else {
					$('.fadeIn01, .fadeIn02').fadeOut();
				}
			}
		});
	}
	/* !CLICK TO SCROLL DOWN AND SHOW CLICKED CONTAIN -------------------------------------------------------------- */
	jQuery(document).ready(function($){
	
		var pageScroll = function()
		{
			jQuery.easing.easeInOutCubic = function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t*t + b;
				return c/2*((t-=2)*t*t + 2) + b;
			}; 
			$('a.scroll, .scroll a').each(function(){
				$(this).bind("click keypress",function(e){
					e.preventDefault();
					var target  = $(this).attr('href');
					var targetY = $(target).offset().top;
					var parent  = ( isUA.opera() )? (document.compatMode == 'BackCompat') ? 'body': 'html' : 'html,body';
					$(parent).animate(
						{scrollTop: targetY },
						1000
					);
					return false;
				});
			});	
		}
		/*.-------------------------------------------------------------------------- */
		pageScroll();
	});
	/*.SCROLL HIDE SHOW FUNCTION -------------------------------------------------------------------------- */
	$(document).ready(function()
	{
		$(window).scroll(function()
		{
			scroll_menu();
		});
		function scroll_menu()
		{
			var scrollTop = parseInt($(document).scrollTop());
			if(scrollTop > 50) {
				$('.scrollBtn').slideDown(1500);
			}
		}
	});
	
	/* !COMMON-------------------------------------------------------------- */
	var common = (function()
	{
		/*! PULLDOWN HOVER ON SUB-MENUS DOWN--------------------------------------------------- */
		$('#gNavi li').hover(function()
		{
			if($(this).has('ul'))
				$(this).find('ul').stop().slideDown(200);
		},
		function()
		{
			if($(this).has('ul'))
			$(this).find('ul').stop().slideUp(200);
		});
		/*---------------------------------------------*/
		/*! CLICK TO MENU BUTTON TO SLIDE DOWN AND UP--------------------------------------------------- */
		$('.navbarToggle').on('click',function()
		{
			var target = $(this).data('target');
			if($(target).hasClass("on"))
			{
				$(target).stop().slideUp(200).removeClass("on");
				$(this).removeClass("on");
			}
			else
			{
				$(target).stop().slideDown(200).addClass("on");
				$(this).addClass("on");
			}
		});
		$(window).resize(function (event)
		{
			if($('.visibleTS').css('display') == 'none')
			{
				var target = $('.navbarToggle').data('target');
				$(target).hide().removeClass("on");
				$('.navbarToggle').removeClass("on");
			}
		});
		/*CLICK TO OPEN IMAGE FULL SIZE WITH DETAIL---------------------------------------------*/
		$(document).ready(function(e) {
			$('#gallery ul li a').click(function(){
				$('.bigImg').slideDown(400);
				$('.close').show(200);
			});
			$('.close').click(function(){
				$(this).hide(200);
				$('.bigImg').slideUp(400);
			});
		});
		/*! --------------------------------------------------- */
		if ($('#pageID').length == 1)
		{
			var ides = $('#pageID').val().split(',');
			for (var idx = 0; idx < ides.length; idx++)
			{
				var id = '#' + ides[idx];
				
				if ($(id).not('a').length == 1)
				$(id).addClass('selected');
			}
		}
	});
	
	
	
	