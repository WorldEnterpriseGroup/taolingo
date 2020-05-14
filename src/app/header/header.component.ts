import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
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
    $('.main-menu nav').meanmenu({
      meanScreenWidth: "767",
      meanMenuContainer: '.mobile-menu'
    });

    $(".search-btn").click(function () {
      $(".search-btn").toggleClass('open');
      $(this).closest('ul').find('> li.tree-parent').attr('aria-expanded', function (i, attr) {
        return attr == 'true' ? 'false' : 'true'
      });

    });


  }

}
