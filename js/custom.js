$(window).load(function(){

	"use strict";
	

	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	}); 
 
 
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a, a.scrool").click(function(e){
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -69}, 1000);
			return false;
		
	});

	
	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})


	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */
	
	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'phone':$('input[name="register_phone"]').val(),
					'date':$('input[name="register_date"]').val(),
					'email':$('input[name="register_email"]').val(),
					'ticket':$('select[name="register_ticket"]').val(),
					'time':$('select[name="register_time"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})

	
	/* ========================================================== */
	/*   Revolution Slider - Home Page                            */
	/* ========================================================== */
	var tpj = jQuery;

		var revapi280;
		tpj(document).ready(function() {
			if (tpj("#rev_slider_280_1").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev_slider_280_1");
			} else {
				revapi280 = tpj("#rev_slider_280_1").show().revolution({
					sliderType: "hero",
					jsFileLocation: "../../revolution/js/",
					sliderLayout: "fullscreen",
					dottedOverlay: "none",
					delay: 9000,
					navigation: {},
					responsiveLevels: [1240, 1024, 778, 480],
					visibilityLevels: [1240, 1024, 778, 480],
					gridwidth: [1240, 1024, 778, 480],
					gridheight: [868, 768, 960, 720],
					lazyType: "none",
					shadow: 0,
					spinner: "spinner2",
					autoHeight: "off",
					fullScreenAutoWidth: "off",
					fullScreenAlignForce: "off",
					fullScreenOffsetContainer: "",
					fullScreenOffset: "60",
					disableProgressBar: "on",
					hideThumbsOnMobile: "off",
					hideSliderAtLimit: 0,
					hideCaptionAtLimit: 0,
					hideAllCaptionAtLilmit: 0,
					debugMode: false,
					fallbacks: {
						simplifyAll: "off",
						disableFocusListener: false,
					}
				});
			}
		}); /*ready*/
	
	
	/* ========================================================== */
	/*   Revolution Slider - About Page                           */
	/* ========================================================== */
	
	var tpj=jQuery;
	
	var revapi30;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_30_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_30_1");
		}else{
			revapi30 = tpj("#rev_slider_30_1").show().revolution({
				sliderType:"carousel",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"gyges",
						enable:true,
						hide_onmobile:false,
						hide_onleave:false,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:20,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:20,
							v_offset:0
						}
					}
					,
					
				},
				carousel: {
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					vary_fade: "on",
					maxVisibleItems: 3,
					infinity: "on",
					space: 0,
					stretch: "off"
				},
				gridwidth:720,
				gridheight:405,
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	/* ========================================================== */
	/*   Revolution Slider - Menu Page                            */
	/* ========================================================== */
	
	var tpj=jQuery;	
						
	var revapi108;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_108_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_108_1");
		}else{
			revapi108 = tpj("#rev_slider_108_1").show().revolution({
				sliderType:"carousel",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"off",
					arrows: {
						style:"metis",
						enable:true,
						hide_onmobile:true,
						hide_under:768,
						hide_onleave:false,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:0,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:0,
							v_offset:0
						}
					}
					,
					thumbnails: {
						style:"erinyen",
						enable:true,
						width:150,
						height:100,
						min_width:150,
						wrapper_padding:20,
						wrapper_color:"#000000",
						wrapper_opacity:"0.05",
						tmp:'<span class="tp-thumb-over"></span><span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span><span class="tp-thumb-more"></span>',
						visibleAmount:9,
						hide_onmobile:false,
						hide_onleave:false,
						direction:"horizontal",
						span:true,
						position:"outer-bottom",
						space:10,
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:0
					}
				},
				carousel: {
					maxRotation: 65,
					vary_rotation: "on",
					minScale: 55,
					vary_scale: "off",
					horizontal_align: "center",
					vertical_align: "center",
					fadeout: "on",
					vary_fade: "on",
					maxVisibleItems: 5,
					infinity: "on",
					space: -150,
					stretch: "off"
				},
				gridwidth:600,
				gridheight:600,
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	/* ========================================================== */
	/*   Revolution Slider - Reservation Page (Video)             */
	/* ========================================================== */
	
	var tpj=jQuery;							
	var revapi110;
	tpj(document).ready(function() {
		if(tpj("#rev_slider_110_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_110_1");
		}else{
			revapi110 = tpj("#rev_slider_110_1").show().revolution({
				sliderType:"hero",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:20000,
				navigation: {
				},
				responsiveLevels:[1240,1024,778,778],
				gridwidth:[1240,1024,778,480],
				gridheight:[600,500,400,300],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				autoHeight:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "60px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					disableFocusListener:false,
				}
			});
		}
	});	/*ready*/
	
	
	/* ========================================================== */
	/*   Page Loader                                              */
	/* ========================================================== */
	  $('#loader').fadeOut(100);

		
});