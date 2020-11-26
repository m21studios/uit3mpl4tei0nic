import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social04',
  templateUrl: './social04.page.html',
  styleUrls: ['./social04.page.scss'],
})
export class Social04Page implements OnInit {

  activeInput:boolean = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 4,
    autoplay: {
      delay: 5000,
    },
  };

  slideStoriesOpts = {
    initialSlide: 1,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };

  constructor() { }

  ngOnInit() {
    this.activeInput = false;
  }

  activeInputComponent(){
    this.activeInput = !this.activeInput;
  }

}
