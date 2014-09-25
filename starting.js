$(window).load(function() {    

			var theWindow        = $(window),
				$bg              = $(".bg");
				//aspectRatio      = $bg.width() / $bg.height();
								

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

			/*theWindow.on("pagecontainerchange", function(evt,ui){
				//console.log(ui);
				//console.log($(ui.toPage.find('img')));
				var newimg = $(ui.toPage.find('img'));
				if ((theWindow.width() / theWindow.height()) < aspectRatio){
					newimg.height('100%');
				}
				newimg.width('100%');
				newimg.height('100%');
				newimg.attr('position','fixed');
				
				theWindow.resize(resizeBg).trigger("resize");

			});*/

			

});