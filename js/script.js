$(document).ready(function(){

    //toggler btn
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    })

    // sticky scroll bar
    $(window).scroll(function(){
        let position = $(this).scrollTop();

        if (position >= 718) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
    })

    //smooth scroll
    $('.nav-item a, .header-link, .header-link2, #back-to-top').click(function(link){
        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
    })




    $("#header, .info, #contactus").ripples({
        dropRadius: 25,
        perturbance: 1,
    });
      //magnific popup
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery:{
            enabled:true
        }
        // other options
      });

      //animation effect
      AOS.init({
          easing: 'ease',
          duration: 1000,  
        });

});