import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social05',
  templateUrl: './social05.page.html',
  styleUrls: ['./social05.page.scss'],
})
export class Social05Page implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 4,
    autoplay: {
      delay: 5000,
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
