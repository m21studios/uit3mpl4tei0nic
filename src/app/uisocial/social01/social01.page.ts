import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social01',
  templateUrl: './social01.page.html',
  styleUrls: ['./social01.page.scss'],
})
export class Social01Page implements OnInit {

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
