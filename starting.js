$(window).load(function() {    

	var theWindow        = $(window),
		$bg              = $(".bg");					

	function aspectRatio(){
		var activePage = $.mobile.activePage;
		var bgimg = activePage.find('.bg');
		return bgimg.width()/bgimg.height();
	}

	function resizeBg() {

		if ( (theWindow.width() / theWindow.height()) < aspectRatio() ) {
			$bg
				.removeClass('bgwidth')
				.addClass('bgheight');
		} else {
			$bg
				.removeClass('bgheight')
				.addClass('bgwidth');
		}
			
	}
	theWindow.resize(resizeBg).trigger("resize");

	var currPageId = $.mobile.activePage.attr('id');

	$('#'+currPageId+'-link').addClass('currentpage').removeClass('otherpage');

	$('.otherpage').on('click',function(){
		$this=$(this);
		$('.currentpage').removeClass('currentpage').addClass('otherpage');
		$this.addClass('currentpage').removeClass('otherpage');
	});

	function detectmob() { 
		if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		){
			return true;
		}
		else {
		    return false;
		}
	}

	$('#close-popup').on('click',function(){
		$popup = $('#popupDialog');
		$popup.popup('close');
		$popup.addClass('hidden');
	});

	if(detectmob()){
		$popup = $('#popupDialog');
		$popup.popup();
		$popup.popup('open');
		$popup.removeClass('hidden');
	}
});