import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides2page',
  templateUrl: './slides2page.page.html',
  styleUrls: ['./slides2page.page.scss'],
})
export class Slides2pagePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 4,
    autoplay: {
      delay: 5000,
    },
  };

  slide2Opts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
  };

  slide3Opts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 4,
  };

  slide4Opts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 4,
  };


  constructor() { }

  ngOnInit() {
  }

}
