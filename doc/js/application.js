// Generated by CoffeeScript 1.6.3
(function(){var e;e=function(e){return setTimeout(e,100)};jQuery(function(){var t,n,r,i,s,o,u;jQuery("[data-background-image]").each(function(){var e;e=jQuery(this).data("background-image");return jQuery(this).css("background-image","url("+e+")")});prettyPrint();jQuery("[data-responsive-video=true]").fitVids();jQuery("a[data-colorbox=true]").colorbox({maxWidth:"90%",maxHeight:"90%"});jQuery("a[data-colorbox-slideshow]").each(function(){var e;e=jQuery(this).data("colorbox-slideshow");return jQuery(this).colorbox({rel:e,maxWidth:"90%",maxHeight:"90%"})});i=null;s=function(){return jQuery(window).width()>479?"40%":"80%"};jQuery(".navbar-toggle").sidr({source:"#navbar-collapse",renaming:!1});t=function(){return jQuery("#navbar-collapse").width()-jQuery("#navbar-items").width()-jQuery(".navbar-header").width()-jQuery(".login-nav").width()};u=!1;jQuery("#trigger-search-top").on("click",function(){var e,n;u=!u;n=300;jQuery("#search-top-bar").toggle(function(){return jQuery(this).animate({width:0,height:"36px",opacity:0},150)},function(){return jQuery(this).animate({width:n,height:"36px",opacity:1},150)});e=jQuery("#navbar-items");if(u){t()<n&&e.fadeOut();return jQuery("#search-top-bar").focus()}if(!e.is(":visible"))return e.fadeIn()});jQuery("#search-top-bar").focusout(function(){var e,n;if(jQuery("#search-top-bar").val()===""){u=!u;n=300;jQuery("#search-top-bar").toggle(function(){return jQuery(this).animate({width:0,height:"36px",opacity:0},150)},function(){return jQuery(this).animate({width:n,height:"36px",opacity:1},150)});e=jQuery("#navbar-items");if(u){t()<n&&e.fadeOut();return jQuery("#search-top-bar").focus()}if(!e.is(":visible"))return e.fadeIn()}});o=function(){var e,t,n;t=jQuery("#owl-carousel").height();e=jQuery(".owl-prev").height();n=(t-e)/2;jQuery(".owl-prev").css("top",""+n+"px");return jQuery(".owl-next").css("top",""+n+"px")};r=function(){var e;e=jQuery("#owl-carousel").height();return jQuery("#owl-carousel .item").css("min-height",e)};jQuery("#owl-carousel").owlCarousel({rewindNav:!1,navigation:!0,navigationText:['<i class="fa fa-angle-left hidden-xs"></i>','<i class="fa fa-angle-right hidden-xs"></i>'],pagination:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,afterUpdate:function(){e(o);return e(r)},afterInit:function(){e(o);return e(r)}});if(jQuery("[data-isotope-container=true]").length>0){jQuery("[data-isotope-container=true]").isotope({layoutMode:"fitRows",animationEngine:"jquery"});jQuery(window).trigger("resize")}n=function(){var e,t;e=1.77777777777778;t=1.33333333333333;return jQuery("[data-crop-video-thumbnail=true]").each(function(){var n,r,i,s;s=jQuery(this).width();i=s/e;n=s/t;r=-(n-i)/2;jQuery(this).css("overflow","hidden").css("height",i);return jQuery(this).find("img").css("margin-top",r)})};n();return jQuery(window).resize(n)});jQuery(window).resize(function(){jQuery(window).width()<1024&&jQuery("#navbar-items").attr("style","");if(jQuery(window).width()>767){jQuery("#navbar-collapse, body, #wrapper, .navbar-header").attr("style","");return jQuery("#search-top-bar").attr("style","")}return jQuery("body").css("width",jQuery(window).width())})}).call(this);