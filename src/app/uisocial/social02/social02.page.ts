import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social02',
  templateUrl: './social02.page.html',
  styleUrls: ['./social02.page.scss'],
})
export class Social02Page implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerColumn: 1,
    slidesPerView: 5,
    spaceBetween: 1,
    resistanceRatio: 1,
  };
  constructor() { }

  ngOnInit() {
  }

}
