/***************************************************
==================== JS INDEX ======================
****************************************************
01. sal js
02. back-to-top
03. stiky js
04. mobile menu js
05. counter up
06. popup
07. nice select
08. banner slider Home 1
09. service-slider home 2
10. testimonial active home one
11. work active home one
12. team home 2
13. testimonial slider home 2
14. banner slider home 3
15. team home 3
16. testimonial home 3
17. preloader
18. expand gallery js
19. ecommerce-js 
20. team slider home 5
21. 
22. 
23. 
24. 
25. 
26. 
27. 




****************************************************/




// 01.sal js
sal();


(function($){
    "use strict";



// banner slider 10 
    var swiper = new Swiper(".mySwiper10", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper12", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".vl-hero-button-next3",
        prevEl: ".vl-hero-button-prev3",
      },
      thumbs: {
        swiper: swiper,
      },
    });



    // 02. back-to-top
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
    // 03. stiky js
    var windowOn = $(window);
    windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#vl-header-sticky").removeClass("header-sticky");
      } else {
        $("#vl-header-sticky").addClass("header-sticky");
      }
    });
    // 04. mobile menu js
    var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
    var vlSideMenu = $('.vl-offcanvas-menu nav');
    vlSideMenu.append(vlMenuWrap);
    if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length != 0) {
      $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      console.log(e);
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });
    $(".vl-offcanvas-toggle").on('click',function(){
        $(".vl-offcanvas").addClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
    });
    $(".vl-offcanvas-close-toggle,.vl-offcanvas-overlay").on('click', function(){
        $(".vl-offcanvas").removeClass("vl-offcanvas-open");
        $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
    });


    

    // 05. counter up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // 06. popup
    $('.popup-image').magnificPopup({
        type: 'image'
      });
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    // 07. nice select
    $('select').niceSelect();


    // 08. banner slider Home 1
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', 
      loop: true,
      centeredSlides: true,
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      },
      navigation: {
        nextEl: '.vl-swiper-test-button-next',
        prevEl: '.vl-swiper-test-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
          crossFade: true,
      },
    });
    
    // 09. service-slider home 2
      var swiper = new Swiper(".vl-ser-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      keyboard: {
          enabled: true,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".vl-servic-button-next",
          prevEl: ".vl-servic-button-prev",
      },
      breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView:3,
          }
        },
      });

    // 10. testimonial active home one
    var swiper = new Swiper(".testimonialactive", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
          crossFade: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".vl-testimonial-button-prev",
        prevEl: ".vl-testimonial-button-next",
      },
    });

    // 11. work active home one
    var swiper = new Swiper(".vl-work-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      keyboard: {
          enabled: true,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView:3,
          },
          1400: {
            slidesPerView:3,
          }
        },
      });


      // 12. team home 2
      var swiper = new Swiper(".team-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".vl-team-button-prev",
          prevEl: ".vl-team-button-next",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          }
        },
      });

      // 13. testimonial slider home 2
      var swiper = new Swiper(".mySwiper1", {
        loop: true,
        slidesPerView: 3,
        //freeMode: true,
        //watchSlidesProgress: true,
       });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        thumbs: {
          swiper: swiper,
        },
      });

      // test
      var slider = new Swiper ('.tp-testimonial-content-active', {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.tp-room-details-slide-next',
            prevEl: '.tp-room-details-slide-prev',
        },
      });
      var thumbs = new Swiper ('.tp-testimonial-thumb-active', {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
      
      slider.controller.control = thumbs;
      thumbs.controller.control = slider;




      // 14. banner slider home 3
      var swiper = new Swiper(".banSwiper", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".vl-bne3r-button-prev",
          prevEl: ".vl-bne3r-button-next",
        },
      });

      // 15. team home 3
      var swiper = new Swiper(".teamSwip3", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".vl-team-button-prev3",
          prevEl: ".vl-team-button-next3",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
        },
      });


      

      // 16. testimonial home 3
      var swiper = new Swiper(".testSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".vl-teamo-button-prev3",
          prevEl: ".vl-teamo-button-next3",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          }
        },
      });
      
      var swiper = new Swiper(".brSwiper", {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      // home 2 brand slider
      var swiper = new Swiper(".brandactive", {
        speed: 10000,
        direction: "horizontal",
        loop: true,
        slidesPerView: 3,
        freeMode: true,
        zoom: true,
        keyboard: true,
        pagination: false,
        navigation: false,
        autoplay: {
          delay: 0
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView:4,
          },
          1200: {
            slidesPerView: 6,
          }
        },
      });

      // service slider home 5
      var swiper = new Swiper(".serviceActive5", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".vl-team-button-next-5",
          prevEl: ".vl-team-button-prev-5",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:3,
          },
          1280: {
            slidesPerView: 4,
          }
        },
      });

      // testimonial slider home 5
      var swiper = new Swiper(".testimonialActive5", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-testimonial-button-next-5",
          prevEl: ".vl-testimonial-button-prev-5",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:2,
          },
          1280: {
            slidesPerView: 2,
          }
        },
      });


      // team slider home 5
      var swiper = new Swiper(".teamActive5", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-team-button-next-5",
          prevEl: ".vl-team-button-prev-5",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:3,
          },
          1280: {
            slidesPerView: 4,
          }
        },
      });

      // team slider 10
      var swiper = new Swiper(".teamActive10", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-team-button-next-5",
          prevEl: ".vl-team-button-prev-5",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:3,
          },
          1280: {
            slidesPerView: 4,
          }
        },
      });


      // service slider home 9
      var swiper = new Swiper(".servicActive9", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".vl-team-button-next-5",
          prevEl: ".vl-team-button-prev-5",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:3,
          },
          1280: {
            slidesPerView: 4,
          }
        },
      });


      // case slider home 6
      var swiper = new Swiper(".caseActive6", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-case-button-next-6",
          prevEl: ".vl-case-button-prev-6",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView:2,
          },
          1280: {
            slidesPerView: 2,
          }
        },
      });

      // case slider home 8
      var swiper = new Swiper(".caseActive8", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-case-button-next-8",
          prevEl: ".vl-case-button-prev-8",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView:2,
          },
          1280: {
            slidesPerView: 3,
          }
        },
      });


      // testimonial slider home 7
      var swiper = new Swiper(".testimonialActive7", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-testimonial-button-next-7",
          prevEl: ".vl-testimonial-button-prev-7",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:2,
          },
          1280: {
            slidesPerView: 2,
          }
        },
      });

      // testimonial slider home 8
      var swiper = new Swiper(".testimonialActive8", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".vl-testimonial-button-next-8",
          prevEl: ".vl-testimonial-button-prev-8",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView:2,
          },
          1280: {
            slidesPerView: 3,
          }
        },
      });

      // testimonial slider 9 

      var swiper = new Swiper(".testimonial9Swiper", {
          direction: "vertical",
          //loop: true,
          slidesPerView: 2,
          //slidesPerView: 4,
     // spaceBetween: 30,
      });


      // testimonial slider 9 

      swiper = new Swiper('.swiperr', {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 0,
        enabled: true,
      },
      mousewheel: false,
    });




    


    // banner 10
    

      


      // 17. preloader
     $(window).on("load", function (event) {
      setTimeout(function () {
        $(".preloader").fadeToggle();
      }, 200);
    
    });

    
    $(window).on("load", function(){
      $(".box[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
    });
    
      // 18. expand gallery js
      const panels = document.querySelectorAll('.panel')
         
      panels.forEach(panel => {
          panel.addEventListener('mousemove', () =>{
              removeActiveClasses()
              panel.classList.add('active')
          })
      })
      
      
      function removeActiveClasses(){
          panels.forEach(panel =>{
              panel.classList.remove('active')
          })
      }

      // 19. ecommerce-js 
      $('.vl-cart-minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
    
      $('.vl-cart-plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });

      document.querySelectorAll('.progress-circle').forEach(circle => {
        const progress = parseFloat(circle.getAttribute('data-progress')) || 0;
        const radius = 28;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;
      
        const progressCircle = circle.querySelector('.progress');
        if (progressCircle) {
          progressCircle.style.strokeDasharray = `${circumference}`;
          progressCircle.style.strokeDashoffset = `${offset}`;
        }
      });
     
})(jQuery);








