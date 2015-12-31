/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 function subm(e)
{
    e.preventDefault();
     var name = $('#name').val();
                var email_id = $('#email_id').val();
                var phone_no = $('#phone_no').val();
                var college = $('#college').val();
                var city = $('#city').val();
                var year = $('#year').val();
                var branch = $('#branch').val();
                
                if ((name !== "") && (email_id !== "") && (phone_no !== "") && ( branch !== "") && (city !== "") && (year !== "") && (college !== "")  && ( (validateEmail(email_id)))) {
                   $.post( "http://aakshank2k16-ietdauniv.rhcloud.com/submit",{name:name,email:email_id,phone:phone_no,college:college,city:city,year:year,branch:branch},function( data ) {
  console.log(data);
});
                }
                else {
                    console.log("Error Message : Not Working");
                    alert("Error");
                }
}
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

//slider

var link = $('.com__nav-link');
var linkParent = link.parent('li');
var section = $('.com__section');
var sectionContent = section.find('*');

var switchTab = function() {
	var p = $(this).parent('li');
	var i  = p.index();
	var s = section.eq(i);
	var c = s.find('*');
	
	section.removeClass('active');
	sectionContent.removeAttr('style');
	s.addClass('active');
	
	c.css({
		transform: 'none',
		opacity: 1
	});
	
	linkParent.removeClass('active');
	p.addClass('active');
	
	return false;
};

link.on('click', switchTab);

function activeFirst() {
	section.first().addClass('active');
	section.first().find('*').css({
		transform: 'none',
		opacity: 1
	});
	linkParent.first().addClass('active');
}

activeFirst();