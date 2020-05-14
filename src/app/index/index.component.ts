import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';


// import * as $ from 'jquery';
declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, AfterViewInit, OnDestroy {


  constructor() { }

  ngOnInit(): void {
    var windows = $(window);
    var stick = $(".header-sticky");
    windows.on('scroll', function () {
      var scroll = windows.scrollTop();
      if (scroll < 5) {
        stick.removeClass("sticky");
      } else {
        stick.addClass("sticky");
      }
    });

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $('.main-menu nav').meanmenu({
      meanScreenWidth: "767",
      meanMenuContainer: '.mobile-menu'
    });
    $('.slider-owl').owlCarousel({
      loop: true,
      nav: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 2500,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $('.partner-owl').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });

    $('.testimonial-owl').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    $(".notice-left").niceScroll({
      cursorcolor: "#EC1C23",
      cursorborder: "0px solid #fff",
      autohidemode: false,

    });

    $("#register").submit(function (event) {
      if (!$("#register").validate().form()) {
        return false; //doesn't validate
      } else {
        event.preventDefault(); //prevent default action
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var content_type = $(this).attr("enctype"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission

        $.ajax({
          type: $(this).attr('method'),
          url: $(this).attr('action'),
          data: $(this).serialize(),
          success: function (data) {
            $("#register")[0].reset();
            $("input:checkbox").attr('checked', false);
            Swal({
              title: '<strong>Submission Successful</strong>',
              type: 'success',
              html:
                'We received your request. A representative will get in touch soon!',
              showCloseButton: true,
              focusConfirm: false,
              confirmButtonText:
                '<a style="color: white" href="courses"><i class="fa fa-address-card"></i> Go to Courses</a>',
              confirmButtonAriaLabel: 'Go to Courses',
            });
            console.log('Submission was successful.');
            console.log(data);
          },
          error: function (data) {
            console.log('An error occurred.');
            console.log(data);
          },
        }).then(function (response) { //
          $("#server-results").html(response);
        }); //form is validated do your work
      }
    });

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    $("div.nicescroll-rails").remove();

  }

}
