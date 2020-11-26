import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallerypage',
  templateUrl: './gallerypage.page.html',
  styleUrls: ['./gallerypage.page.scss'],
})
export class GallerypagePage implements OnInit {

  public imagelist = [];

  constructor() { }

  ngOnInit() {
    this.imagelist = [
      {
        id:'1',
        image:'../../../assets/profiles/p17.jpg',
      },
      {
        id:'2',
        image:'../../../assets/profiles/p5.jpg',
      },
      {
        id:'3',
        image:'../../../assets/profiles/p7.jpg',
      },
      {
        id:'4',
        image:'../../../assets/profiles/p11.jpg',
      },
      {
        id:'5',
        image:'../../../assets/profiles/p16.jpg',
      }
    ]
  }

  sdmode(){
    console.log("sd storage");
  }

  sdcloud(){
    console.log("cloud storage");
  }

}
