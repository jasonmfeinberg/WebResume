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
});