import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.page.html',
  styleUrls: ['./videopage.page.scss'],
})
export class VideopagePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
