
// refresh
(function($){
	// document-ready
	$(document).ready(function(){

		
	 	wow = new WOW({
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    });

   wow.init();

  //responsive-slide-menu

//slide-show--
  $('#bar').click(function(){

  	$('.responsive-slide-menu').css({

  		left:'0px',
  		transition:'all 0.3s linear'

  	});
  	$('.re-menu-main').css({

  		left:'0px',
  		transition:'all 0.9s linear'

  	});
  	
  });

//slide-close-up
  $('#cross').click(function(){

  	$('.responsive-slide-menu').css({

  		left:'-100vw',
  		transition:'all 0.7s linear'

  	});

  	$('.re-menu-main').css({

  		left:'-100vw',
  		transition:' all 0.4s linear'

  	});



  });



	});
})(jQuery)